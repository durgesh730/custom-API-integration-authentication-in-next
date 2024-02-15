import React, { useState } from "react";
import Image from "next/image";
import pic from "@/images/jobs.webp";
import { jobs } from "@/Database/db";
import { getTimeDifference } from "@/utils/tools";

const Job = () => {
  // State for keyword filter
  const [keyword, setKeyword] = useState("");
  // State for sorting by date
  const [sortByDate, setSortByDate] = useState("newest");
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  // Filter jobs based on keyword
  const filteredJobs = jobs.results.filter((job) =>
    job.job_title.toLowerCase().includes(keyword.toLowerCase())
  );

  // Sort jobs based on date
  const sortedJobs = filteredJobs.sort((a, b) => {
    if (sortByDate === "newest") {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    } else {
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    }
  });

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = sortedJobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className="py-6">
      <div className="text-center flex justify-between filter pb-4">
        {/* Keyword filter */}
        <div>
          <input
            type="text"
            placeholder="Search jobs by title..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        {/* Sort by date */}
        <div className=" cursor-pointer">
          <select
            value={sortByDate}
            onChange={(e) => setSortByDate(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      {/* Display jobs */}
      {currentJobs.map((item, index) => (
        <div className="pb-8">
          <div key={index} className="card m-auto">
            <div className="mt-3 ml-1 flex justify-start items-start gap-6">
              <div>
                <Image src={pic} width={50} height={50} alt="job image" />
              </div>

              <div>
                <div className=" font-semibold">{item.job_title}</div>

                <div className="flex justify-start pt-2 gap-4 pl-0">
                  <div className="font-normal text-[12px] text-[#43484E]">
                    {item.location}
                  </div>
                  <div className="text-[12px] font-normal text-[#43484E]">
                    {getTimeDifference(item.timestamp)}
                  </div>
                </div>

                <div className="text-[12px] pt-2 font-normal text-[#43484E] pl-0">
                  {item.job_type && (
                    <span className="bg-[#E8EEFA] py-1 px-2 rounded-3xl">
                      {item.job_type}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className=" text-center">
        pages:
        {Array.from({ length: Math.ceil(sortedJobs.length / jobsPerPage) }).map(
          (_, index) => (
            <button
              className="m-2"
              key={index}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Job;
