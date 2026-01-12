import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Zap, Mail, Lock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const loginSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const signupSchema = z.object({
  displayName: z.string().trim().min(1, { message: "Display name is required" }),
  email: z.string().trim().email({ message: "Please enter a valid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type LoginFormData = z.infer<typeof loginSchema>;
type SignupFormData = z.infer<typeof signupSchema>;

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { user, signIn, signUp } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const signupForm = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: { displayName: "", email: "", password: "", confirmPassword: "" },
  });

  const handleLogin = async (data: LoginFormData) => {
    setIsSubmitting(true);
    const { error } = await signIn(data.email, data.password);
    
    if (error) {
      toast({
        title: "Login failed",
        description: error.message === "Invalid login credentials" 
          ? "Invalid email or password. Please try again."
          : error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      });
    }
    setIsSubmitting(false);
  };

  const handleSignup = async (data: SignupFormData) => {
    setIsSubmitting(true);
    const { error } = await signUp(data.email, data.password, data.displayName);
    
    if (error) {
      let message = error.message;
      if (error.message.includes("already registered")) {
        message = "This email is already registered. Please sign in instead.";
      }
      toast({
        title: "Signup failed",
        description: message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Account created!",
        description: "Welcome to EVO Grow!",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
              <Zap className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-bold text-foreground">
              EVO<span className="text-gradient">Grow</span>
            </span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {isLogin ? "Welcome back" : "Create an account"}
          </h1>
          <p className="text-muted-foreground">
            {isLogin
              ? "Sign in to access your dashboard"
              : "Start your evolution journey today"}
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-strong rounded-2xl p-8 border border-border/50">
          {isLogin ? (
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="bg-background/50 border-border/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground flex items-center gap-2">
                        <Lock className="w-4 h-4 text-primary" />
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          className="bg-background/50 border-border/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Signing in..." : (
                    <span className="flex items-center gap-2">
                      Sign In <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          ) : (
            <Form {...signupForm}>
              <form onSubmit={signupForm.handleSubmit(handleSignup)} className="space-y-4">
                <FormField
                  control={signupForm.control}
                  name="displayName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Display Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="John Doe"
                          autoComplete="name"
                          className="bg-background/50 border-border/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          autoComplete="email"
                          className="bg-background/50 border-border/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground flex items-center gap-2">
                        <Lock className="w-4 h-4 text-primary" />
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          className="bg-background/50 border-border/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground flex items-center gap-2">
                        <Lock className="w-4 h-4 text-primary" />
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          className="bg-background/50 border-border/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Creating account..." : (
                    <span className="flex items-center gap-2">
                      Create Account <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          )}

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>

        {/* Back to home */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
