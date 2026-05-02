import { ButtonLink } from "@/components/landing/ButtonLink";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#fff8f4] px-5 text-center">
      <div className="max-w-xl rounded-[2.5rem] border border-[#ecd6cc] bg-white/75 p-8 shadow-[0_28px_80px_rgba(110,76,63,0.12)] backdrop-blur sm:p-12">
        <p className="text-sm font-bold tracking-[0.24em] text-[#b78b62]">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-stone-950 sm:text-5xl">
          העמוד לא נמצא
        </h1>
        <p className="mt-5 leading-8 text-stone-600">
          נראה שהגעת לכתובת שלא קיימת. אפשר לחזור לעמוד הראשי ולקבוע טיפול
          בקלות.
        </p>
        <div className="mt-8">
          <ButtonLink href="/">חזרה לעמוד הבית</ButtonLink>
        </div>
      </div>
    </main>
  );
}
