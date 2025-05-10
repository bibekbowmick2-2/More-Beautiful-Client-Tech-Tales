import React from "react";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center min-h-lvh px-4 py-10 gap-8 bg-[#080325]">
      <h1 className="text-4xl lg:text-5xl text-white font-extrabold text-center drop-shadow-md">
        Frequently Asked Questions
      </h1>

      <div className="w-full max-w-4xl space-y-4">
        {/* Question 1 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-xl shadow-lg">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-lg lg:text-xl font-semibold text-indigo-700">
            What is the purpose of this application?
          </div>
          <div className="collapse-content text-gray-700 leading-relaxed text-sm">
            <p>
              This application helps users find and collect discount coupons and voucher codes
              from various e-commerce stores in Bangladesh, making online shopping more affordable.
            </p>
          </div>
        </div>

        {/* Question 2 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-xl shadow-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg lg:text-xl font-semibold text-indigo-700">
            How can I sign up and log in to the application?
          </div>
          <div className="collapse-content text-gray-700 leading-relaxed text-sm">
            <p>
              You can sign up or log in using your email and password, or use your Google account via Firebase Authentication for a fast and secure experience.
            </p>
          </div>
        </div>

        {/* Question 3 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-xl shadow-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg lg:text-xl font-semibold text-indigo-700">
            What types of coupons are available in this application?
          </div>
          <div className="collapse-content text-gray-700 leading-relaxed text-sm">
            <p>
              You’ll find discounts, cashback offers, free shipping, and more. Each coupon comes with details like discount amount, expiry date, and applicable categories.
            </p>
          </div>
        </div>

        {/* Question 4 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-xl shadow-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg lg:text-xl font-semibold text-indigo-700">
            Are the coupons updated regularly?
          </div>
          <div className="collapse-content text-gray-700 leading-relaxed text-sm">
            <p>
              Yes! Our app is updated frequently to ensure you get the latest offers. Expired coupons are removed automatically.
            </p>
          </div>
        </div>

        {/* Question 5 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-xl shadow-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg lg:text-xl font-semibold text-indigo-700">
            How can I use the coupons found in this application?
          </div>
          <div className="collapse-content text-gray-700 leading-relaxed text-sm">
            <p>
              Just click on a coupon, copy the code, and paste it at checkout on the relevant website to enjoy the discount!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
