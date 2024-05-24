import PropTypes from "prop-types";

function Error({ error }) {
  return (
    <div className="px-2 text-center">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-8xl font-extrabold text-red-500">
          {error?.response?.status}
        </h1>
        <p className="text-4xl font-medium text-muted">{error.message}</p>

        {error?.response?.status === 429 && (
          <p className="font-medium text-muted text-sm mt-4 max-w-lg">
            {error?.response?.status === 429
              ? "You have exceeded the DAILY quota for Requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/ytdlfree/api/youtube-v31"
              : null}
          </p>
        )}
        <p className="text-xl text-muted mt-4">
          We apologize for the inconvenience. Please try again later.
        </p>
      </div>
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
