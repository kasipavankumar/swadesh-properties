type ProgressBarProps = {
  text: string;
  currentProgress: number;
  totalProgress?: number;
};

export default function ProgressBar({
  text,
  currentProgress,
  totalProgress = 100,
}: ProgressBarProps) {
  const width = `${Math.min(
    Math.max(Math.floor((currentProgress / totalProgress) * 100), 0),
    100
  )}%`;

  return (
    <div
      data-cy="progress-bar"
      className="flex flex-row space-x-3 items-center mb-5 w-full"
    >
      <div
        data-cy="progress-bar-shell"
        className="h-1.5 md:w-52 w-full bg-gray-300 rounded-full"
      >
        <div
          data-cy="progress"
          className="bg-royalGreen h-full py-0.5 rounded-full"
          style={{ width }}
        />
      </div>
      <p className="font-medium text-royalGreen whitespace-nowrap">
        {currentProgress}% {text}
      </p>
    </div>
  );
}
