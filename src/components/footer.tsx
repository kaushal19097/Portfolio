import { Button } from '@/components/button';

export const Footer = () => {
  return (
    <footer className="text-muted-foreground my-2 text-sm">
      © {new Date().getFullYear()}{' '}
      <Button
        asChild
        variant="link"
        className="text-muted-foreground p-0 font-medium"
      >
        <a href="https://github.com/kaushal19097">Kaushal Chaudhary</a>
      </Button>
      . All rights reserved.
    </footer>
  );
};
