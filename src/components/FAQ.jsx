import React from "react";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center min-h-lvh mt-4 gap-5">
      <h1 className="text-4xl lg:text-5xl mx-auto text-color font-extrabold">
        Your Frequently Asked Questions
      </h1>


      <div class="collapse collapse-arrow bg-indigo-500 w-5/6">
  <input type="radio" name="my-accordion-2" checked="checked" />
  <div class="collapse-title text-xl font-medium">What is the purpose of this application?</div>
  <div class="collapse-content">
    <p>This application is designed to help users find and collect discount coupons and voucher codes from various e-commerce stores in Bangladesh. It provides an easy and convenient way to browse, copy, and use these coupons to save money while shopping online.</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-indigo-500 w-5/6">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-xl font-medium">How can I sign up and log in to the application?</div>
  <div class="collapse-content">
    <p>Users can sign up or log in using their email address and password. Alternatively, you can log in using your Google account through Firebase Authentication for a faster and secure experience.</p>
  </div>
</div>
<div class="collapse collapse-arrow bg-indigo-500 w-5/6">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-xl font-medium">What types of coupons are available in this application?</div>
  <div class="collapse-content">
    <p>The application provides coupons for a variety of e-commerce stores in Bangladesh. These include discounts on products, cashback offers, free shipping deals, and more. Each coupon includes details such as the discount amount, expiry date, and applicable product categories.</p>
  </div>
</div>


<div class="collapse collapse-arrow bg-indigo-500 w-5/6">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-xl font-medium">Are the coupons updated regularly?</div>
  <div class="collapse-content">
    <p>Yes, the application is updated regularly to ensure that users have access to the latest coupons and offers. Expired or invalid coupons are removed, and new coupons are added as soon as they become available.</p>
  </div>
</div>


<div class="collapse collapse-arrow bg-indigo-500 w-5/6">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title text-xl font-medium">How can I use the coupons found in this application?</div>
  <div class="collapse-content">
    <p>To use a coupon, simply browse the available options, click on a coupon to view its details, and copy the coupon code with one click. Then, paste the code at checkout on the respective e-commerce store's website to avail the discount.</p>
  </div>
</div>


     
    </div>
  );
}
