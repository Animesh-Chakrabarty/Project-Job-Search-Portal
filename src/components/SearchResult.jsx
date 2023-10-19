import { data } from "../constants/data";
import JobCard from "./JobCard";

import { useSelector } from "react-redux";
import JobDetails from "./JobDetails";

const SearchResult = () => {
  let jobDetails = useSelector((state) => state.jobDetails.data);

  // console.log(jobDetails);

  return (
    <div className="flex h-full overflow-auto no-scrollbar gap-5 max-2xl:gap-2">
      {/* left */}
      <div className=" w-[35%] max-xl:w-[45%] h-full px-2 overflow-auto no-scrollbar flex flex-col gap-3 ">
        {data?.data?.map((jobDetails) => (
          <div key={jobDetails?.job_id}>
            <JobCard jobDetails={jobDetails} />
          </div>
        ))}
      </div>
      {/* right */}
      <div className="w-[60%]  max-xl:w-[50%]  h-full  overflow-auto no-scrollbar">
        <JobDetails jobDetails={jobDetails} />
      </div>
    </div>
  );
};

export default SearchResult;
