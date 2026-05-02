export const siteConfig = {
  name: "Beauty By Maya",
  description:
    "טיפולי פנים בהתאמה אישית באווירה יוקרתית, רגועה ומקצועית.",
  url: "https://beauty-by-maya.example",
  phone: "055-680-0707",
  whatsapp: "972556800707",
  location: "רחוב עמינדב 23, תל אביב",
  hours: "א׳–ה׳ 09:00–19:00 | ימי שישי בתיאום מראש",
};

export const whatsappLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "היי מאיה, אשמח לקבוע תור לטיפול פנים"
)}`;
