import Image from "next/image";
import Link from "next/link";

export default function ResumeSummary() {
  return (
    <section id="resume-summary" className="min-h-screen p-8 flex flex-col items-center text-center">
      <Image
        src="/headshot-placeholder.svg"
        alt="Headshot of Luis Rodriguez"
        width={200}
        height={200}
        className="mb-4 rounded-full"
      />
      <p className="max-w-2xl mb-6">
        Luis Rodriguez is an Omaha-based Actuarial Analyst with a strong dual background in Economics and Mathematics, evidenced by his 4.0 GPA in both fields. He has a proven track record of applying analytical and programming skills to real-world financial and research problems. His experience spans actuarial science, financial planning, and academic research, complemented by leadership roles and professional certifications. A full résumé is available as a downloadable PDF for detailed viewing.
      </p>
      <Link
        href="/LuisRodriguez_Resume.pdf"
        className="px-6 py-3 bg-primary text-white rounded shadow"
      >
        Download Résumé (PDF)
      </Link>
    </section>
  );
}
