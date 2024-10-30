import React from 'react';

const AboutUsContent = () => {
  return (
    <section className="w-full md:w-[80%] lg:w-[70%] mx-auto px-6 sm:px-10 font-Roboto  text-[clamp(1.1rem,1.4vw,1.6rem)]">
        <div className="mb-8">
        <p className=' mb-4'>At L-Earn Academy, we understand that even if you have a huge vocabulary and know the rules very well, it is useless if you do not understand what lies beneath that empty surface. It is about appreciating various cultures, meeting people across the globe, and breaking all sorts of barriers. Our goal is to provide high-quality language training so that students will be able to use the language fluently and without fear in the present global reality.</p>
        </div>
        <div className="mb-8">
        <h3 className='  text-clamp-h2 font-semibold font-RobotoSlab mb-4 '>Our Philosophy</h3>
        <p className='mb-4'>We value a flexible and dynamic student-centered model. We have a wide spectrum of language courses based on different levels and different ways of learning. Starting from a person who knows nothing about the language and wants to learn it for basic purposes, a businessperson who will advance their career by learning the language, or an expert in the language who wants to do a course with us, we have just the right program for you. Our courses will always be interactive, engaging, enjoyable, and rich in culture so that learners gain language skills that are functional even outside the classroom setting.</p>
        </div>


      <section className="mb-8">
        <h2 className=" text-clamp-h2 font-semibold font-RobotoSlab  mb-4">Our Courses</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Language Courses:</strong> Acquire skills in languages like English, Spanish, French, German, and Mandarin among others. </li>
          <li><strong>Business Language Training Programs: </strong>These are specialized courses designed to develop language for the global business environment. </li>
          <li><strong>Test Preparation: </strong> Courses devoted to severe language abuse for examinations such as the TOEFL, IELTS, DELE, HSK, and the like. </li>
          <li><strong>Kids and Teens Programs:</strong> These provide entertaining and effective courses to give younger learners a head start in their language acquisition. </li>
          <li><strong>Conversation Clubs and Cultural Workshops:</strong> Get a sense of the culture and how things are done while practicing the language more practically.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className=" text-clamp-h2 font-semibold font-RobotoSlab  mb-4">Our Founder</h2>
        <p className="mb-4">
        The formation of L-Earn Academy is thanks to a passionate language teacher who not only comprehends how to teach languages effectively but also possesses a burning desire to teach. L-Earn Academy's founder boasts ten years of experience in the teaching profession. One such notable experience covers some of the university lecturing positions she held in different countries, where she taught college students and worked with teaching allies in other countries to improve her skills. Also, she is a holder of a master’s degree in Spanish and a degree in Dutch, and up to this moment, she has managed to help many students, including those during corporate language training and others, just for fun in pursuing these languages.
        </p>

      </section>

      <section className="mb-8">
        <h2 className=" text-clamp-h2 font-semibold font-RobotoSlab  mb-4">Why Opt For L-Earn Academy? </h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Customized Learning:</strong> We understand that every learner is different. That is why our courses are designed to meet their different learning patterns and aims.</li>
          <li><strong>Adept Trainers:</strong> Our team of devoted teachers has experience in teaching and a desire for students' success. </li>
          <li><strong>Language Professional:</strong>Culture is inseparable from any language. In our courses, culture is an integral part of the learning process. </li>
          <li><strong>Community-Oriented::</strong> We foster and provide an environment conducive to all the language students, enabling them to interact freely with people with the same interests and help one another.</li>
        </ul>
      </section>

      <p className="text-lg">
      Enroll at L-Earn Academy today and get ready to learn a language that will change your life, lift your communication skills to the next level, and open up many more opportunities and horizons for you.
      </p>
    </section>
  );
};

export default AboutUsContent;
