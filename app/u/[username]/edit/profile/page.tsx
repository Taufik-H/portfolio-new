"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, Upload, X } from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Define skill type with image
interface Skill {
  name: string;
  imageUrl?: string;
}

// Define form schema with zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  profile_title: z.string().optional(),
  bio: z.string().optional(),
  image: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .optional()
    .or(z.literal("")),
  cover_image: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .optional()
    .or(z.literal("")),
  status: z.enum(["student", "available_for_hiring", "available_to_work"]),
});

type FormValues = z.infer<typeof formSchema>;

export default function EditProfilePage() {
  // State for array fields
  const [roleInput, setRoleInput] = useState("");
  const [roles, setRoles] = useState<string[]>([]);

  // State for skills with images
  const [skillInput, setSkillInput] = useState("");
  const [skillImageUrl, setSkillImageUrl] = useState("");
  const [skills, setSkills] = useState<Skill[]>([]);

  // Set up react-hook-form with zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      profile_title: "",
      bio: "",
      image: "",
      cover_image: "",
      status: "student",
    },
  });

  // Handle adding roles
  const handleAddRole = () => {
    if (roleInput.trim() && !roles.includes(roleInput.trim())) {
      setRoles([...roles, roleInput.trim()]);
      setRoleInput("");
    }
  };

  const handleRoleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      handleAddRole();
    }
  };

  const removeRole = (role: string) => {
    setRoles(roles.filter((r) => r !== role));
  };

  // Handle adding skills with images
  const handleAddSkill = () => {
    if (
      skillInput.trim() &&
      !skills.some((s) => s.name === skillInput.trim())
    ) {
      setSkills([
        ...skills,
        {
          name: skillInput.trim(),
          imageUrl: skillImageUrl.trim() || undefined,
        },
      ]);
      setSkillInput("");
      setSkillImageUrl("");
    }
  };

  const handleSkillKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const removeSkill = (skillName: string) => {
    setSkills(skills.filter((s) => s.name !== skillName));
  };

  // Handle form submission
  const onSubmit = (data: FormValues) => {
    console.log({ ...data, roles, skills });
    // Here you would send the data to your backend
  };

  // Upcoming feature badge
  const UpcomingBadge = () => (
    <Badge
      variant="outline"
      className="ml-1 text-[10px] h-5 bg-purple-100 border-2 border-neutral-900"
    >
      UPCOMING
    </Badge>
  );

  // Custom neubrutalism input style
  const inputStyles = "brutalism-input";

  return (
    <div className="section-container max-w-2xl py-6 px-4 mx-auto">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold">Edit Your Profile</h1>
        <p className="text-sm text-muted-foreground">
          Update your information and customize your profile
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Cover Image Section */}
          <Card className="brutalism-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Cover Image</CardTitle>
              <CardDescription>Recommended aspect ratio 4:3</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Cover Preview - Smaller size */}
                <div className="w-full sm:w-1/2 aspect-[4/3] max-h-[160px] overflow-hidden rounded-md border-3 border-neutral-900 bg-muted flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  {form.watch("cover_image") ? (
                    <img
                      src={
                        form.watch("cover_image") ||
                        "https://placehold.co/600x600?text=IMG"
                      }
                      alt="Cover"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center text-muted-foreground p-2">
                      <Camera size={24} className="mx-auto mb-1" />
                      <p className="text-sm">No cover image</p>
                    </div>
                  )}
                </div>

                {/* Cover Image Controls */}
                <div className="w-full sm:w-1/2 space-y-3">
                  <FormField
                    control={form.control}
                    name="cover_image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Cover Image URL
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              {...field}
                              className={cn(inputStyles)}
                              placeholder="https://example.com/cover.jpg"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs font-medium text-red-500" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="button"
                    variant="outline"
                    disabled
                    className="w-full text-sm h-12 flex items-center justify-center gap-2 brutalism-border"
                  >
                    <Upload size={16} />
                    <span>Upload Cover</span>
                    <UpcomingBadge />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Image & Basic Info */}
          <Card className="brutalism-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Profile Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Profile Image & URL in a row */}
              <div className="flex items-center gap-4 pb-2">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 overflow-hidden rounded-md border-3 border-neutral-900 bg-muted flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    {form.watch("image") ? (
                      <img
                        src={
                          form.watch("image") ||
                          "https://placehold.co/600x600?text=IMG"
                        }
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Camera size={24} />
                    )}
                  </div>
                  <div className="absolute -bottom-1 -right-1 -left-0.5 rounded-sm  p-0.5">
                    <UpcomingBadge />
                  </div>
                </div>

                <div className="flex-grow">
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Profile Image URL
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              {...field}
                              className={inputStyles}
                              placeholder="https://example.com/profile.jpg"
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs font-medium text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Basic Info - Single Column */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className={inputStyles}
                          placeholder="Your full name"
                        />
                      </FormControl>
                      <FormMessage className="text-xs font-medium text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className={inputStyles}
                          placeholder="@username"
                        />
                      </FormControl>
                      <FormMessage className="text-xs font-medium text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className={inputStyles}
                          placeholder="your.email@example.com"
                        />
                      </FormControl>
                      <FormMessage className="text-xs font-medium text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="profile_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Profile Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className={inputStyles}
                          placeholder="e.g. Senior Developer at Company"
                        />
                      </FormControl>
                      <FormMessage className="text-xs font-medium text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Status
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="h-12 text-base border-3 border-neutral-900 rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus-visible:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] focus-visible:translate-x-[2px] focus-visible:translate-y-[2px] focus-visible:ring-0 focus-visible:ring-offset-0 transition-all px-4">
                            <SelectValue placeholder="Select your status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="available_for_hiring">
                            Available for Hiring
                          </SelectItem>
                          <SelectItem value="available_to_work">
                            Available to Work
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs font-medium text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Bio Section */}
          <Card className="brutalism-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Bio</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="min-h-[120px] text-base border-3 border-neutral-900 rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus-visible:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] focus-visible:translate-x-[2px] focus-visible:translate-y-[2px] focus-visible:ring-0 focus-visible:ring-offset-0 transition-all p-4"
                        placeholder="Tell us about yourself..."
                      />
                    </FormControl>
                    <FormMessage className="text-xs font-medium text-red-500" />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Roles Section */}
          <Card className="brutalism-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Roles</CardTitle>
              <CardDescription>Add your professional roles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 min-h-[40px]">
                {roles.map((role) => (
                  <Badge
                    key={role}
                    variant="secondary"
                    className="flex items-center gap-1 px-3 py-1.5 h-8 text-sm border-3 border-neutral-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {role}
                    <button
                      type="button"
                      onClick={() => removeRole(role)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X size={14} />
                    </button>
                  </Badge>
                ))}
                {roles.length === 0 && (
                  <p className="text-sm text-muted-foreground">
                    No roles added yet
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <Input
                  id="role"
                  value={roleInput}
                  onChange={(e) => setRoleInput(e.target.value)}
                  onKeyDown={handleRoleKeyDown}
                  className={inputStyles}
                  placeholder="Add a role (e.g. Developer)"
                />
                <Button
                  type="button"
                  variant={"amber"}
                  onClick={handleAddRole}
                  className="h-12 px-4 text-base border-3 border-neutral-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="brutalism-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Skills</CardTitle>
              <CardDescription>
                Add your technical skills with optional logos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 min-h-[40px]">
                {skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="flex items-center gap-1 px-3 py-1.5 h-8 text-sm border-3 border-neutral-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {skill.imageUrl && (
                      <img
                        src={
                          skill.imageUrl ||
                          "https://placehold.co/600x600?text=IMG"
                        }
                        alt={skill.name}
                        className="w-4 h-4 object-contain"
                      />
                    )}
                    {skill.name}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill.name)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X size={14} />
                    </button>
                  </Badge>
                ))}
                {skills.length === 0 && (
                  <p className="text-sm text-muted-foreground">
                    No skills added yet
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[2fr,1fr] gap-3">
                <div>
                  <Label htmlFor="skill" className="text-sm font-medium mb-2">
                    Skill Name
                  </Label>
                  <Input
                    id="skill"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={handleSkillKeyDown}
                    className={inputStyles}
                    placeholder="e.g. React, UI Design"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium flex items-center mb-2">
                    Logo URL
                    <span className="ml-1 text-xs text-muted-foreground">
                      (optional)
                    </span>
                  </Label>
                  <div className="relative">
                    <Input
                      value={skillImageUrl}
                      onChange={(e) => setSkillImageUrl(e.target.value)}
                      className={cn(inputStyles)}
                      placeholder="URL to skill logo"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-1">
                <Button
                  type="button"
                  onClick={handleAddSkill}
                  variant={"amber"}
                  className="h-12 px-4 text-base border-3 border-neutral-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  Add Skill
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  disabled
                  className="h-12 text-sm flex items-center gap-2 brutalism-border"
                >
                  <Upload size={16} />
                  <span>Upload Icons</span>
                  <UpcomingBadge />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              className="h-12 px-6 text-base border-3 border-neutral-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant={"amber"}
              className="h-12 px-8 text-base border-3 border-neutral-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Save Profile
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
