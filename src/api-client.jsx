const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const register = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to register");
    }
    return await response.json();
  } catch (error) {
    return { success: false, message: error.message };
  }

  // const responseBody = await response.json();
  // if (!response.ok) {
  //   throw new Error(responseBody.message);
  // }
};

export const login = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Login Failed!");
  }
  return response.json();

  // if (!response.ok) {
  //   // const responseBody = await response.json();
  //   throw new Error(responseBody.message);
  //   return res(401).json();
  // }
  // return responseBody;
};
export const validateToken = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
      credentials: "include",
    });

    // if (response.ok) {
    //   console.log("token received");
    // }
    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(
        `Token invalid: ${errorDetails.message || response.statusText}`
      );
    }
    return response.json();
  } catch (error) {
    console.error("Error validating token", error);
    throw error;
  }
};

export const logOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Error during log out");
  }
};

export const addMyHotel = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
    method: "POST",
    credentials: "include",
    body: formData,
  });
  console.log(formData);
  if (!response.ok) {
    throw new Error("Failed to add hotel");
  }

  return response.json();
};

export const fetchMyHotels = async () => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error fetching hotels");
  }
  return response.json();
};

export const fetchMyHotelById = async (hotelId) => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels/${hotelId}`, {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error finding hotel");
  }
  return response.json();
};

export const updateMyHotelById = async (hotelId, formData) => {
  const response = fetch(
    // `${API_BASE_URL}/api/my-hotels/${formData.get("hotelId")}}`
    `${API_BASE_URL}/api/my-hotels/${hotelId}`,
    {
      method: "PUT",
      credentials: "include",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update hotel");
  }
  return response.json();
};
