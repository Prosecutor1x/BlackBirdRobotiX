import { useEffect, useState } from "react";

interface TimeRemainingProps {
  targetDate: string;
  timeuptext?: string;
  timetext?: string;
  timenowtext?: string;
  textcolor?: string;
}

const TimeRemaining: React.FC<TimeRemainingProps> = ({
  targetDate,
  timenowtext,
  timetext,
  timeuptext,
  textcolor,
}) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timeDiff, setTimeDiff] = useState(0);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const target = new Date(targetDate);

      const timeDifference = target.getTime() - now.getTime(); // Get the time difference in milliseconds
      setTimeDiff(timeDifference);
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetDate]);

  return (
    <div
      className={`flex justify-center lg:mb-6 gap-2  lg:text-2xl text-xl font-quicksand font-semibold text-${textcolor}`}
    >
      {timeDiff < -86400000 ? (
        <p> {timeuptext}</p>
      ) : timeDiff < 0 ? (
        <p> {timenowtext}</p>
      ) : (
        <>
          <p>{timetext}</p>
          <p>{timeRemaining?.days} days</p>
          <p>{timeRemaining?.hours} hours</p>
          {/* <p>{timeRemaining.minutes} minutes</p>
          <p>{timeRemaining.seconds} seconds</p> */}
        </>
      )}
    </div>
  );
};

export default TimeRemaining;
