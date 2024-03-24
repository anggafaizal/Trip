import React from 'react';
import './TestimoniStyles.css'; // Pastikan path ke CSS relatif terhadap posisi file JSX ini
import TestimoniData from './TestimoniData'; // Pastikan path ini benar dan tidak ada spasi tambahan
// ... komponen atau kode lainnya di sini
import Team from "./../assets/5.jpg";
import Team2 from "./../assets/8.jpg";
import Team3 from "./../assets/6.jpg";


function Testimoni() {
  return (
    <div className="team-section">
      <div className="container">
      <h1>Testimonials</h1>
      <p>Bringing You the World, One Journey at a Time</p>
      </div>
      
      <div className="team-member">
        <TestimoniData
          image={Team}
          heading="Jhon  Doe"
          testimoni= "Founder & CEO"
        />
        <TestimoniData
          image={Team2}
          heading="Jane Smith"
          testimoni="Travel Consultant"
        />
        <TestimoniData
          image={Team3}
          heading="Emily Davis"
          testimoni="Customer Service Lead"
        />

          </div>
    </div>
  );
}

export default Testimoni;
