const sections = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "education", title: "Education" },
];

export default function Home() {
  return (
    <main id="top">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              {section.title}
            </h2>
          </div>
        </section>
      ))}
    </main>
  );
}
