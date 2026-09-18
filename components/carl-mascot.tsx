'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { PointerEvent } from 'react';

export function CarlMascot() {
  const [isFloating, setIsFloating] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  function resetPosition(target: HTMLButtonElement) {
    target.style.setProperty('--carl-x', '0px');
    target.style.setProperty('--carl-y', '0px');
    target.style.setProperty('--carl-tilt', '0deg');
  }

  function handlePointerMove(event: PointerEvent<HTMLButtonElement>) {
    if (event.pointerType !== 'mouse') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal =
      (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty(
      '--carl-x',
      `${horizontal * 14}px`,
    );
    event.currentTarget.style.setProperty('--carl-y', `${vertical * 9}px`);
    event.currentTarget.style.setProperty(
      '--carl-tilt',
      `${horizontal * 5}deg`,
    );
  }

  function handleFloat() {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    setIsFloating(false);

    requestAnimationFrame(() => {
      setIsFloating(true);
      resetTimer.current = setTimeout(() => setIsFloating(false), 900);
    });
  }

  return (
    <button
      type="button"
      className={`carl-mascot${isFloating ? ' is-floating' : ''}`}
      aria-label="Make CARL float"
      title="Make CARL float"
      onClick={handleFloat}
      onPointerMove={handlePointerMove}
      onPointerLeave={(event) => resetPosition(event.currentTarget)}
      onBlur={(event) => resetPosition(event.currentTarget)}
    >
      <Image
        className="carl-art"
        src="/carl-fredricksen.png"
        width="512"
        height="768"
        alt=""
        aria-hidden="true"
        decoding="async"
        unoptimized
      />
    </button>
  );
}
