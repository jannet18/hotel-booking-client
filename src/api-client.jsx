const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

// export const fetchCurrentUser = async () => {
//   const response = await fetch(`${API_BASE_URL}/api/users/me`, {
//     credentials: "include",
//   });
//   console.log(response);
//   if (!response.ok) {
//     throw new Error("Error fetching user");
//   }
//   console.log(response);
//   return response.json();
// };

export const fetchCurrentUser = async () => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout

  try {
    const response = await fetch(`${API_BASE_URL}/api/users/me`, {
      credentials: "include",
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error("Error fetching user");
    }
    return response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === "AbortError") {
      throw new Error("Request timed out");
    }
    throw error;
  }
};

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
};
export const validateToken = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
      credentials: "include",
    });
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
  try {
    const response = await fetch(`${API_BASE_URL}/api/my-hotels/${hotelId}`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Error finding hotel");
    }
    return response.json();
  } catch (error) {
    console.error("Error updating hotel", error);
    throw error;
  }
};

export const updateMyHotelById = async (formData) => {
  const response = await fetch(
    `${API_BASE_URL}/api/my-hotels/${formData.get("hotelId")}`,
    {
      method: "PUT",
      body: formData,
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update Hotel");
  }

  return response.json();
};

// export const searchParams = {
//   destination: "",
//   checkIn: "",
//   checkOut: "",
//   adultCount: "",
//   childCount: "",
//   page: "",
//   facilities: [],
//   types: [],
//   stars: [],
//   maxprice: "",
//   sortOption: "",
// };

export const searchHotels = async (searchParams) => {
  const queryParams = new URLSearchParams();
  queryParams.append("destination", searchParams?.destination || "");
  queryParams.append("checkIn", searchParams?.checkIn || "");
  queryParams.append("checkOut", searchParams?.checkOut || "");
  queryParams.append("adultCount", searchParams?.adultCount || "");
  queryParams.append("childCount", searchParams?.childCount || "");
  queryParams.append("page", searchParams?.page || "");
  queryParams.append("maxPrice", searchParams?.maxprice || "");
  queryParams.append("sortOption", searchParams?.sortOption || "");

  searchParams.types?.forEach((type) => {
    queryParams.append("types", type);
  });
  searchParams.facilities?.forEach((facility) => {
    queryParams.append("facilities", facility);
  });

  searchParams.stars?.forEach((star) => {
    queryParams.append("stars", star);
  });
  console.log("Search Parameters:", searchParams); // Debug statement
  console.log("Query Params String:", queryParams.toString());
  const response = await fetch(
    `${API_BASE_URL}/api/hotels/search?${queryParams}`
  );

  if (!response.ok) {
    throw new Error("Error fetching hotels");
  }

  return response.json();
};

// export const searchHotels = async (searchParams) => {
//   const queryParams = new URLsearchParams(searchParams);

//   const response = await fetch(
//     `${API_BASE_URL}/api/hotels/search?${queryParams}`,
//     {
//       credentials: "include",
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Error fetching hotels");
//   }

//   return response.json();
// };

export const fetchHotelById = async (hotelId) => {
  const response = await fetch(`${API_BASE_URL}/api/hotels/${hotelId}`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error fetching Hotels");
  }
  return response.json();
};
