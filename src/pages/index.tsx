/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { useRouter } from 'next/router';
import Selections from '../components/Selections';
import { generateGameId } from '../utils/generateGameId';

export default function Home() {
  const router = useRouter();
  const [selection, setSelection] = useState<'Rock' | 'Paper' | 'Scissors' | null>(null);
  const [win, setWin] = useState(0);
  const [loss, setLoss] = useState(2);

  const handleSelection = (choice: 'Rock' | 'Paper' | 'Scissors') => {
    setSelection(choice);
    // Update the score logic here
    setWin((prevScore) => prevScore + 1);
  };

  const handlePlayWithFriend = () => {
    const gameId = generateGameId();
    router.push(`/two-player/${gameId}`);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between py-12 px-8 bg-custom-radial`}
    >
      <div className="flex justify-between w-full md:w-7/12 max-w-xl p-6 border border-headerOutline rounded-lg">
        <div className="flex flex-col justify-center">
          <p className="font-barlow font-bold text-2xl md:text-3xl">ROCK</p>
          <p className="font-barlow font-bold text-2xl md:text-3xl -my-3">PAPER</p>
          <p className="font-barlow font-bold text-2xl md:text-3xl">SCISSORS</p>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col p-3 w-16 md:w-24 h-16 md:h-20 border rounded-lg justify-center items-center bg-white">
            <p className="font-barlow font-semibold text-xs text-scoreText">WIN</p>
            <p className="font-barlow font-bold text-2xl md:text-5xl text-darkText">{win}</p>
          </div>
          <div className="flex flex-col p-3 w-16 md:w-24 h-16 md:h-20 border rounded-lg justify-center items-center bg-white">
            <p className="font-barlow font-semibold text-xs text-lossText">LOSE</p>
            <p className="font-barlow font-bold text-2xl md:text-5xl text-darkText">{loss}</p>
          </div>
        </div>
      </div>
      <Selections onSelect={handleSelection} />
      <div className="flex w-full justify-center md:justify-between gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
          onClick={handlePlayWithFriend}
        >
          PLAY WITH A FRIEND
        </button>
        <button className="bg-transparent text-white font-semibold py-2 px-4 border border-headerOutline hover:border-white rounded hover:cursor-pointer">
          RULES
        </button>
      </div>
    </main>
  );
}
