import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMySpotStore } from "@/store";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";


const totalSteps = 4;
const stepIncrement = 100 / totalSteps;

type Props ={
    id?: string | null,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function AddLocationDialog({id=null,open,setOpen}:Props) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const myStore = useMySpotStore();
  const router = useRouter();

  useEffect(() => {
    setStep(1);


  const fetchData = () => {
     console.log('fetching data');
  }
  
  if (id && open) {
    fetchData()
  } else {
      myStore.restart()
  }


  }, [id,open])

  const handleListAnother = () => {
    setStep(1);
    myStore.restart();
  }

  const handleFinalSubmit = () => {
    console.log(myStore.data);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
           <div className="space-y-8">
                <Progress value={step*stepIncrement}/>
               
           </div>
        </DialogHeader>
        <DialogFooter>
            <div className="flex flex-col mt-4 w-full space-y-2">
               <Button type="button" onClick={handleFinalSubmit} >
                submit
               </Button>
               <Button type="button" variant="outline" onClick={handleListAnother} >
                List another
               </Button>
            </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddLocationDialog;
