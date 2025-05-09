import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase.init";
import Swal from "sweetalert2";
import { data } from "react-router-dom";
import { toast } from 'react-toastify';
export const ContextProvider = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const [reviews, setReviews] = useState([]);
  const [passwordError, setPasswordError] = useState("");
  const [wishlist, setWishlist] = useState([]);



  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;
    const hasSpecialCharacter = /[^a-zA-Z0-9]/.test(password); 
    const hasNumericCharacter = /[0-9]/.test(password);

    if (!hasUppercase) {
      return "Password must have at least one uppercase letter.";
    }
    if (!hasLowercase) {
      return "Password must have at least one lowercase letter.";
    }
    if (!isValidLength) {
      return "Password must be at least 6 characters long.";
    }

    if (!hasSpecialCharacter) {
      return "Password must contain special characters.";
    }
    if (!hasNumericCharacter) {
      return "Password must contain numeric characters.";
    }

    return ""; // No errors
  };


  const handleReview = async (e, navigate) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    // const name = form.name.value;
    const title = form.title.value;
    const image = form.thumbnail.value;
    const shortDescription = form.shortdescription.value;
    const longDescription = form.longdescription.value;
    const category = form.genre.value;
    const email = form.email.value;

   

    const reviews = {
     
      title,
      image,
      shortDescription,
      longDescription,
      category,
      email,
    };

    fetch("https://server-tech-tales.vercel.app/blogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setLoading(false);
          toast.success("Blog added successfully");
          navigate("/allReviews");
         
        }
      });
  };




  const  handleUpdateReview = async (e, navigate) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const title = form.title.value;
    const email = form.email.value;
    const image = form.thumbnail.value;
    const longdescription = form.longdescription.value;
    const shortdescription = form.shortdescription.value;
    const genre = form.genre.value;
    const id = form.id.value;
    console.log(id);


   

    const reviews = {
     
      title,
      email,
      image,
      longdescription,
      shortdescription,
      genre,
    };

    fetch(`https://server-tech-tales.vercel.app/update-reviews/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount>0) {
          setLoading(false);
          toast.success("Review Updated successfully");
          navigate("/allReviews");
         
        }
      });
  };





  const handleSubmit = async (event, navigate) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);
    
      setLoading(true);
      const error = validatePassword(password);
      if (error) {
        setPasswordError(error); // Set the error message
        
        return; // Stop form submission
      }
  
      setPasswordError("");

    

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

     
      const user = userCredential.user;

      // Update user profile with additional data
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      }
       );


      // setLoading(false);
      toast.success("User created successfully");

      console.log("Signed up User", user);
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
       toast.error(errorMessage);
      console.error("Error during sign-up", errorCode, errorMessage);
    }finally
    {
      setLoading(false);
    }

  };

  const handleSubmit2 =  async(e, navigate) => {
    e.preventDefault();
   
    const email = e.target.email.value;
    const password = e.target.password.value;
    setLoading(true);
  

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
       
       setLoading(false);
        console.log("Signed in  User", user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
         
      }

      
      )
  };

  const handleGoogle = (navigate) => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://server-tech-tales.vercel.app/my-review1/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                console.log("deleted");
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your Blog has been deleted.",
                  icon: "success",


                  
                });

                // setReviews((prevReviews) =>
                //   prevReviews.filter((review) => review._id !== id)
                // );

              } else {
                swalWithBootstrapButtons.fire({
                  title: "Error!",
                  text: "Could not delete the blog.",
                  icon: "error",
                });
              }
            })
            .catch((error) => {
              console.error("Error deleting review:", error);
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your review is safe :)",
            icon: "error",
          });
        }
      });
  };





  const handleWishDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://server-tech-tales.vercel.app/watchlist1/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                console.log("deleted");
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your Blog from wishlist has been deleted.",
                  icon: "success",


                  
                });

                // setReviews((prevReviews) =>
                //   prevReviews.filter((review) => review._id !== id)
                // );

              } else {
                swalWithBootstrapButtons.fire({
                  title: "Error!",
                  text: "Could not delete the blog.",
                  icon: "error",
                });
              }
            })
            .catch((error) => {
              console.error("Error deleting blog:", error);
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your review is safe :)",
            icon: "error",
          });
        }
      });
  };




// const [items,setItems]= useState([]);

  const handleAddToWatchList = async (product, navigate,userEmail) => {
    setLoading(true);

    try{
      const updatedProduct = { ...product, email: userEmail };
      const response = await fetch('https://server-tech-tales.vercel.app/watchlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
    }

      ).then((res) => res.json()

      )
      .then((data) => {
        if (data.insertedId) {
          setLoading(false);
          // setItems((prevItems) => [...prevItems, product]);
          toast.success("Watchlist added successfully");
          navigate("/gameWatchList");
         
        }
      });


  }
  catch(error){
    console.log(error);
  }

  }



  const [isDark, setIsDark] = useState(true);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      console.log("current user", CurrentUser);
      setUser(CurrentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);


// Comment Section
  const handleComment = (e,navigate,id) => {
    e.preventDefault();
 
    const comment = e.target.comment.value;
    const comment_information = {
      comment,
      email: user?.email,
      displayName: user?.displayName,
      photoURL: user?.photoURL.replace(/"/g, ""),
      productId: id,


    }
   
    fetch(`https://server-tech-tales.vercel.app/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment_information),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Comment added successfully");
          // navigate("/gameWatchList");
        }
      })

  };

  return (
    <ContextProvider.Provider
      value={{
        handleGoogle,
        handleSubmit,
        handleSubmit2,
        signInUser,
        signOutUser,
        loading,
        user,
        handleReview,
        handleDelete,
        reviews,
        setReviews,
        passwordError,
        handleUpdateReview,
        handleAddToWatchList,
        handleToggle,
        isDark,
        handleWishDelete,
        handleComment
        

      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default AuthProvider;
