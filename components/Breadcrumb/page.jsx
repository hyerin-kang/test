import Link from "next/link";
import "./../Breadcrumb/breadCrumb.scss";

export const Breadcrumb = ({ data }) => {
  console.log(data, "data");
  return (
    <div className="bread-crumb">
      {data?.map((item, index) =>
        item.link ? (
          <span key={index}>
            <Link href={item.link}>{item.title}</Link>
            {index < data.length - 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
              >
                <g opacity="0.4">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.60691 4L2 1.43527L2.69654 0.75L6 4L2.69654 7.25L2 6.56473L4.60691 4Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            )}
          </span>
        ) : (
          <span key={index}>{item.title}</span>
        )
      )}
      {/* {data.map((item, index) => (
        <span key={index}>
          <a href={item.link}>{item.title}</a> <span> - </span>
        </span>
      ))} */}
    </div>
  );
};
