'use client';

import React, { useId } from 'react';
import { Button } from "./button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "./dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

interface HeaderSignUpDialogProps {
    buttonClassName?: string;
    buttonText?: string;
    size?: "default" | "sm" | "lg" | "icon";
    showArrow?: boolean;
}

export function HeaderSignUpDialog({ 
    buttonClassName = "bg-blue-600 text-white shadow-[0_0_15px_#3b82f6] hover:bg-[#15397D]",
    buttonText = "Sign up",
    size = "default",
    showArrow = false
}: HeaderSignUpDialogProps) {
    const id = useId();
  
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size={size} className={cn("gap-4 hover:scale-105 transition-transform duration-200", buttonClassName)}>
                    {buttonText} {showArrow && <MoveRight className="w-4 h-4" />}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <div className="flex flex-col items-center gap-2">
                    <div
                        className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
                        aria-hidden="true"
                    >
                        <svg
                            className="stroke-zinc-800 dark:stroke-zinc-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                        >
                            <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
                        </svg>
                    </div>
                    <DialogHeader>
                        <DialogTitle className="sm:text-center">Create an account</DialogTitle>
                        <DialogDescription className="sm:text-center">
                            Enter your information to create a new account.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <form className="space-y-5">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor={`${id}-name`}>Full Name</Label>
                            <Input id={`${id}-name`} placeholder="John Doe" type="text" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor={`${id}-email`}>Email</Label>
                            <Input id={`${id}-email`} placeholder="hi@example.com" type="email" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor={`${id}-password`}>Password</Label>
                            <Input
                                id={`${id}-password`}
                                placeholder="Create a password"
                                type="password"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id={`${id}-terms`} />
                        <Label htmlFor={`${id}-terms`} className="font-normal text-muted-foreground">
                            I agree to the <a className="text-primary underline hover:no-underline" href="#">Terms of Service</a> and <a className="text-primary underline hover:no-underline" href="#">Privacy Policy</a>
                        </Label>
                    </div>
                    <Button type="button" className="w-full">
                        Sign up
                    </Button>
                </form>

                <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                    <span className="text-xs text-muted-foreground">Or</span>
                </div>

                <Button variant="outline">Sign up with Google</Button>
                
                <div className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <a className="text-primary underline hover:no-underline" href="#">
                        Sign in
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
} 