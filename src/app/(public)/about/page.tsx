export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-12">
      <h1 className="text-4xl font-bold my-4 mb-8 text-gray-800 text-center">
        About Me
      </h1>

      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        Hi! I'm{" "}
        <span className="font-semibold text-gray-800">Muh. Afiq Ma'mun</span>, a
        passionate{" "}
        <span className="text-blue-600 font-medium">JavaScript developer </span>
        who loves building clean, user-friendly, and scalable applications. My
        journey started from experimenting with small web projects, and now I’m
        focusing on creating impactful solutions that blend functionality and
        design.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">What I Do</h2>
        <p className="text-gray-600 leading-relaxed">
          I specialize in both frontend and backend development, mostly working
          with{" "}
          <span className="font-medium text-blue-600">React, Vue, Express</span>
          , and <span className="font-medium text-blue-600">Node.js</span>. My
          goal is to deliver applications that not only work well but are
          enjoyable to use.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          Core Skills
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>JavaScript (ES6+), TypeScript</li>
          <li>React, Vue, Tailwind CSS</li>
          <li>Node.js, Express, REST APIs</li>
          <li>Database: MySQL, MongoDB</li>
          <li>Docker & Cloud Deployment Basics</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          Beyond Code
        </h2>
        <p className="text-gray-600 leading-relaxed">
          When I'm not coding, I enjoy learning about UI/UX design, reading tech
          blogs, and occasionally sharing my thoughts on my personal blog. I
          believe great software starts from understanding the people who use
          it.
        </p>
      </section>
    </div>
  );
}
