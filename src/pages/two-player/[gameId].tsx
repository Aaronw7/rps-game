/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Selections from '../../components/Selections';
import Results from '../../components/Results';
import { FaClipboardList } from "react-icons/fa";

export default function Home() {
  const router = useRouter();
  const [selection, setSelection] = useState<'Rock' | 'Paper' | 'Scissors' | null>(null);
  const [win, setWin] = useState(0);
  const [loss, setLoss] = useState(0);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const currentUrl = window.location.href;
    setUrl(currentUrl);
  }, []);

  const handleSelection = (choice: 'Rock' | 'Paper' | 'Scissors') => {
    setSelection(choice);
    // Update the score logic here
    setWin((prevScore) => prevScore + 1);
  };

  const handlePlayWithBot = () => {
    router.push(`/`);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between py-12 px-8 bg-custom-radial`}
    >
      <div className="flex flex-col justify-start items-center w-full">
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center mb-1">
          <div>
            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
              SEND THIS LINK TO A FRIEND
            </label>
          </div>
          <div className="flex items-center py-2 bg-white rounded">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder={url}
              disabled
            />
            <button
              className="flex-shrink-0 border-transparent border-4 text-blue-500 hover:text-blue-400 text-sm py-1 px-2 rounded hover:cursor-pointer"
              type="button"
              onClick={() => navigator.clipboard.writeText(url)}
            >
              <FaClipboardList />
            </button>
          </div>
        </div>
        <Header win={win} loss={loss} />
        {selection ? (
          <Results selection={selection} />
        ): (
          <Selections onSelect={handleSelection} />
        )}
      </div>
      <div className="flex w-full justify-center md:justify-between gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
          onClick={handlePlayWithBot}
        >
          PLAY WITH BOT
        </button>
        <button className="bg-transparent text-white font-semibold py-2 px-4 border border-headerOutline hover:border-white rounded hover:cursor-pointer">
          RULES
        </button>
      </div>
    </main>
  );
}
