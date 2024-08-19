"use client";

import { UserProfile } from "@clerk/nextjs";
import { terms } from "@/data/terms.json";
const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  );
};

const CustomPage = () => {
  return (
    <div>
      <h1>Custom Profile Page</h1>
      <p>This is the custom profile page</p>
    </div>
  );
};
const TermsPage = () => {
  return (
    <div>
      <h1>Terms Page</h1>
      <p>This is the terms page</p>
    </div>
  );
};

const UserProfilePage = () => (
  <div className="flex items-center justify-center h-screen">
    <UserProfile path="/user-profile" routing="path">
      {/* You can pass the content as a component */}
      <UserProfile.Page
        label="Custom Page"
        labelIcon={<DotIcon />}
        url="custom-page"
      >
        <CustomPage />
      </UserProfile.Page>

      {/* You can also pass the content as direct children */}
      <UserProfile.Page label="Terms" labelIcon={<DotIcon />} url="terms">
        <div>
          <h1>Custom Terms Page</h1>
          <p>This is the custom terms page</p>
        </div>
      </UserProfile.Page>
    </UserProfile>
  </div>
);

export default UserProfilePage;
