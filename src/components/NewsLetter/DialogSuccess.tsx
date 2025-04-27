import Image from "next/image";
import { Images } from "../Images";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Typography from "../Common/Typography";

interface DialogSuccessProps {
  isOpen: boolean;
  onClose: () => void;
}

const DialogSuccess: React.FC<DialogSuccessProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} modal onOpenChange={(open) => !open && onClose()}>
      <DialogTrigger></DialogTrigger>
      <DialogContent className="border-0 max-w-[335px]! rounded-3xl!">
        <DialogHeader>
          <DialogTitle>
            <Image
              alt="Native Teams Logo"
              src={Images.NTLogoDefault}
              width={143}
              height={143}
              className="mx-auto"
            />
          </DialogTitle>
          <DialogDescription className="text-center my-4 flex flex-col space-y-4">
            <Typography variant="h3">
              Thank you <br /> for signing up!
            </Typography>
            <Typography variant="paragraph">
              Your email has been added to our list. <br /> Stay tuned for more
              news, and be the first to hear from us.
            </Typography>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSuccess;
