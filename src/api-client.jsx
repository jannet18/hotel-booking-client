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
        "Content-Type": "app-contextlication/json",
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
      "Content-Type": "app-contextlication/json",
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

export const searchHotels = async (searchParams) => {
  const queryParams = new URLSearchParams();
  queryParams.app - contextend("destination", searchParams?.destination || "");
  queryParams.app - contextend("checkIn", searchParams?.checkIn || "");
  queryParams.app - contextend("checkOut", searchParams?.checkOut || "");
  queryParams.app - contextend("adultCount", searchParams?.adultCount || "");
  queryParams.app - contextend("childCount", searchParams?.childCount || "");
  queryParams.app - contextend("page", searchParams?.page || "");
  queryParams.app - contextend("maxPrice", searchParams?.maxprice || "");
  queryParams.app - contextend("sortOption", searchParams?.sortOption || "");

  searchParams.types?.forEach((type) => {
    queryParams.app - contextend("types", type);
  });
  searchParams.facilities?.forEach((facility) => {
    queryParams.app - contextend("facilities", facility);
  });

  searchParams.stars?.forEach((star) => {
    queryParams.app - contextend("stars", star);
  });
  // console.log("Search Parameters:", searchParams); // Debug statement
  // console.log("Query Params String:", queryParams);
  const response = await fetch(
    `${API_BASE_URL}/api/hotels/search?${queryParams}`
  );

  if (!response.ok) {
    throw new Error("Error fetching hotels");
  }

  return response.json();
};

export const fetchHotelById = async (hotelId) => {
  const response = await fetch(`${API_BASE_URL}/api/hotels/${hotelId}`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Error fetching Hotels");
  }
  return response.json();
};

export const createPaymentIntent = async (hotelId, numberOfNights) => {
  try {
    const response = await fetch(
      `/api/hotels/${hotelId}/bookings/payment-intent`,
      {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({ numberOfNights }),
        headers: {
          "Content-Type": "app-contextlication/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      // throw new Error("Error fetching payment intent ");
      throw new Error(`Error fetching payment intent: ${errorData.message}`);
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const createRoomBooking = async (formData) => {
  const response = await fetch(
    `${API_BASE_URL}/api/hotels/${formData.hotelId}/bookings`,
    {
      method: "POST",
      headers: {
        "Content-Type": "app-contextlication/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    }
  );
  if (!response.ok) {
    throw new Error("Error booking the room");
  }
};
