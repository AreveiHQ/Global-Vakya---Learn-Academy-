import React from 'react';

const AboutUsContent = () => {
  return (
    <section className="w-full md:w-[80%] lg:w-[70%] mx-auto px-6 sm:px-10 font-Roboto  text-[clamp(1.1rem,1.4vw,1.6rem)]">
        <div className="mb-8">
        <p className=' mb-4'>Welcome to L-Earn Academy, where language learning meets excellence and innovation. At L-Earn Academy, we believe that mastering a new language is more than just acquiring vocabulary and grammar—it's about embracing new cultures, building global connections, and unlocking a world of opportunities. Our mission is to provide high-quality language education that empowers students to communicate confidently and effectively in today’s globalized world.</p>
        </div>
        <div className="mb-8">
        <h3 className='  text-clamp-h2 font-semibold font-RobotoSlab mb-4 '>Our Philosophy</h3>
        <p className='mb-4'>At L-Earn Academy, we prioritize a student-centered approach that is both adaptable and engaging. We offer a wide range of language courses tailored to different proficiency levels and learning preferences. Whether you’re a beginner eager to start your language journey, a professional looking to enhance your career prospects, or an advanced learner aiming to perfect your skills, we have the right program for you. Our courses are designed to be interactive, immersive, and culturally enriching, ensuring that students gain practical language skills that extend beyond the classroom.</p>
        </div>


      <section className="mb-8">
        <h2 className=" text-clamp-h2 font-semibold font-RobotoSlab  mb-4">Our Courses</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>General Language Courses:</strong> Learn languages such as English, Spanish, French, German, Mandarin, and more.</li>
          <li><strong>Business Language Programs:</strong> Specialized courses to help professionals enhance their language skills for the global marketplace.</li>
          <li><strong>Exam Preparation:</strong> Intensive training for language proficiency exams like TOEFL, IELTS, DELE, and HSK.</li>
          <li><strong>Kids and Teens Programs:</strong> Fun and engaging courses tailored for younger learners to develop their language abilities early on.</li>
          <li><strong>Conversation Clubs and Cultural Workshops:</strong> Gain cultural insights and practice your language skills in real-world settings.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className=" text-clamp-h2 font-semibold font-RobotoSlab  mb-4">Our Founder</h2>
        <p className="mb-4">
          L-Earn Academy was founded by an experienced language educator with a passion for teaching and a deep understanding of effective language instruction. With a decade of experience in language teaching, our founder brings a wealth of knowledge and expertise to the academy. Holding advanced degrees in Spanish and certification in Dutch, our founder has taught students at various levels, from beginners to advanced learners.
        </p>
        <p className="mb-4">
          Their teaching journey includes a notable role as a visiting Assistant Professor at Delhi University, where they imparted knowledge to university students, and a year spent in Spain as an 'Auxiliares de Conversación,' where they further honed their teaching skills. Their approach to language instruction is highly adaptable and student-focused, ensuring that each learner’s unique needs and goals are met. Over the years, our founder has helped countless students achieve fluency and confidence in Spanish and Dutch, whether for corporate training or personal development.
        </p>
      </section>

      <section className="mb-8">
        <h2 className=" text-clamp-h2 font-semibold font-RobotoSlab  mb-4">Why Choose L-Earn Academy?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Personalized Learning:</strong> We understand that every learner is unique. Our courses are tailored to fit individual learning styles and goals.</li>
          <li><strong>Experienced Educators:</strong> Our team of passionate and skilled instructors brings years of experience and a deep commitment to student success.</li>
          <li><strong>Cultural Immersion:</strong> We believe that language learning is most effective when it includes cultural understanding. Our courses integrate cultural insights to enhance your learning experience.</li>
          <li><strong>Community Focus:</strong> We foster a supportive and inclusive learning environment where students can thrive and connect with others who share their passion for languages.</li>
        </ul>
      </section>

      <p className="text-lg">
        Join us at L-Earn Academy and embark on a language learning journey that will transform your communication skills, broaden your horizons, and open doors to new opportunities.
      </p>
    </section>
  );
};

export default AboutUsContent;
