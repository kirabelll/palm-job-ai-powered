interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  postedDate: string;
  salary?: string; // Optional salary
}

interface JobListItemProps {
  job: Job;
}

export default function JobListItem({ job }: JobListItemProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">{job.title}</h2>
        <p className="text-gray-700 font-medium mb-1">{job.company}</p>
        <p className="text-gray-600 text-sm mb-1">{job.location} - {job.type}</p>
        {job.salary && (
          <p className="text-gray-600 text-sm mb-3 font-semibold">Salary: {job.salary}</p>
        )}
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          {job.description.length > 150
            ? `${job.description.substring(0, 147)}...`
            : job.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-gray-500">Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
          <a
            href={`/jobs/${job.id}`} // Link to a potential job detail page
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 text-sm"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}