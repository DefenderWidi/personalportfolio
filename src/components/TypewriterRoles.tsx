import { useEffect, useState } from 'react';

interface Props {
  roles: string[];
  typingSpeed?: number; // ms per karakter
  pauseDuration?: number; // ms sebelum menghapus
  deletingSpeed?: number; // ms per karakter delete
}

export default function TypewriterRoles({
  roles,
  typingSpeed = 100,
  pauseDuration = 1500,
  deletingSpeed = 50,
}: Props) {
  const [displayedText, setDisplayedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, deletingSpeed);
    } else {
      if (displayedText !== currentRole) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseDuration]);

  return <span>{displayedText}|</span>;
}
