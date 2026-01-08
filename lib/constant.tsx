export const aboutLinks = [
  { name: "How it works", url: "#" },
  { name: "Features", url: "#" },
  { name: "Partnership", url: "#" },
  { name: "Bussiness Relation", url: "#" },
];

export const communityLinks = [
  { name: "Events", url: "#" }, 
  { name: "Blog", url: "#" },
  { name: "Podcast", url: "#" }, 
  { name: "Invite a friend", url: "#" },
];

export const socialLinks = [
  { name: "Discord", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "Twitter", url: "#" },  
  { name: "Facebook", url: "#" },
];

export const cityOptions = [ 
  // Gujarat
  { name: "Ahmedabad", value: "ahmedabad" },
  { name: "Surat", value: "surat" },
  { name: "Vadodara", value: "vadodara" },
  { name: "Rajkot", value: "rajkot" },
  { name: "Bhavnagar", value: "bhavnagar" },
  { name: "Jamnagar", value: "jamnagar" },

  // Maharashtra
  { name: "Mumbai", value: "mumbai" },
  { name: "Pune", value: "pune" },
  { name: "Nagpur", value: "nagpur" },
  { name: "Nashik", value: "nashik" },
  { name: "Thane", value: "thane" },

  // Delhi / NCR
  { name: "New Delhi", value: "new-delhi" },
  { name: "Noida", value: "noida" },
  { name: "Gurgaon", value: "gurgaon" },
  { name: "Faridabad", value: "faridabad" },
];

export const timeOptions = [
  { name: "12:00 AM", value: "00:00" },
  { name: "12:30 AM", value: "00:30" },
  { name: "01:00 AM", value: "01:00" },
  { name: "01:30 AM", value: "01:30" },
  { name: "02:00 AM", value: "02:00" },
  { name: "02:30 AM", value: "02:30" }, 
  { name: "03:00 AM", value: "03:00" },
  { name: "03:30 AM", value: "03:30" },
  { name: "04:00 AM", value: "04:00" },
  { name: "04:30 AM", value: "04:30" },
  { name: "05:00 AM", value: "05:00" },
  { name: "05:30 AM", value: "05:30" },
  { name: "06:00 AM", value: "06:00" },
  { name: "06:30 AM", value: "06:30" },
  { name: "07:00 AM", value: "07:00" },
  { name: "07:30 AM", value: "07:30" },
  { name: "08:00 AM", value: "08:00" },
  { name: "08:30 AM", value: "08:30" },
  { name: "09:00 AM", value: "09:00" },
  { name: "09:30 AM", value: "09:30" },
  { name: "10:00 AM", value: "10:00" },
  { name: "10:30 AM", value: "10:30" },
  { name: "11:00 AM", value: "11:00" },
  { name: "11:30 AM", value: "11:30" },

  { name: "12:00 PM", value: "12:00" },
  { name: "12:30 PM", value: "12:30" },
  { name: "01:00 PM", value: "13:00" },
  { name: "01:30 PM", value: "13:30" },
  { name: "02:00 PM", value: "14:00" },
  { name: "02:30 PM", value: "14:30" },
  { name: "03:00 PM", value: "15:00" },
  { name: "03:30 PM", value: "15:30" },
  { name: "04:00 PM", value: "16:00" },
  { name: "04:30 PM", value: "16:30" },
  { name: "05:00 PM", value: "17:00" },
  { name: "05:30 PM", value: "17:30" },
  { name: "06:00 PM", value: "18:00" },
  { name: "06:30 PM", value: "18:30" },
  { name: "07:00 PM", value: "19:00" },
  { name: "07:30 PM", value: "19:30" },
  { name: "08:00 PM", value: "20:00" },
  { name: "08:30 PM", value: "20:30" },
  { name: "09:00 PM", value: "21:00" },
  { name: "09:30 PM", value: "21:30" },
  { name: "10:00 PM", value: "22:00" },
  { name: "10:30 PM", value: "22:30" },
  { name: "11:00 PM", value: "23:00" },
  { name: "11:30 PM", value: "23:30" },
];

export const dateOptions = [
  ...Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);

    const value = date.toISOString().split("T")[0]; // YYYY-MM-DD
    const name = date.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    return { name, value };
  }),
];
