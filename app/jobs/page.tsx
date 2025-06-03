import JobListItem from '@/components/JobListItem';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Placeholder data - in a real application, this would come from a database or API
const jobs = [
  {
    id: '1',
    title: 'Senior Frontend Developer (React/Next.js)',
    company: 'PalmTech Solutions',
    location: 'Remote',
    type: 'Full-time',
    description: 'Seeking an experienced Frontend Developer to build innovative solutions for the palm software industry. Strong experience with React, Next.js, and Tailwind CSS required.',
    postedDate: '2024-06-01',
    salary: '$120,000 - $150,000',
  },
  {
    id: '2',
    title: 'Lead Backend Engineer (Node.js/Python)',
    company: 'AgriPalm Innovations',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Lead our backend team in developing scalable and robust platforms for palm oil supply chain management. Expertise in Node.js or Python, and cloud platforms (AWS/Azure) is essential.',
    postedDate: '2024-05-28',
    salary: '$160,000 - $190,000',
  },
  {
    id: '3',
    title: 'Software Engineer - GIS & Remote Sensing',
    company: 'GeoPalm Analytics',
    location: 'Kuala Lumpur, Malaysia',
    type: 'Full-time',
    description: 'Join our team to develop cutting-edge GIS and remote sensing applications for sustainable palm plantation management. Experience with Python, GDAL, and satellite imagery analysis preferred.',
    postedDate: '2024-06-03',
    salary: 'MYR 10,000 - MYR 15,000 per month',
  },
];

export default function JobsPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-green-700">
          Software Careers in the Palm Industry
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobListItem key={job.id} job={job} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}