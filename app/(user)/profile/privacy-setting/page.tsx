"use client";
import React, { useState } from "react";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Megaphone } from "lucide-react";

const PrivacySetting = () => {
  const [privacy, setPrivacy] = useState({
    privateAccount: false,
    activityStatus: true,
    storySharing: false,
    photoOfYou: "automatically",
    profileVisibility: "public",
    loginNotification: "enable",
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg">
          <div className="px-6 py-4 flex items-center justify-between">
            <h4 className="text-lg font-semibold text-gray-800">
              Privacy Setting
            </h4>
          </div>

          <div className="p-6 space-y-8">
            {/* Account Privacy */}
            <section>
              <h4 className="text-base font-semibold mb-2 text-[#2b2d42]">
                Account Privacy
              </h4>
              <div className="flex items-center gap-3">
                <Checkbox
                  id="privateAccount"
                  checked={privacy.privateAccount}
                  onCheckedChange={(val:any) =>
                    setPrivacy({ ...privacy, privateAccount: !!val })
                  }
                  className="border-[#d1d5db] data-[state=checked]:bg-[#50b5ff] data-[state=checked]:border-[#50b5ff]"
                />
                <Label
                  htmlFor="privateAccount"
                  className="text-sm font-medium text-gray-700"
                >
                  Private Account
                </Label>
              </div>
              <p className="mt-2 text-[#738b9a] text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </section>

            <hr />

            {/* Activity Status */}
            <section>
              <h4 className="text-base font-semibold mb-2 text-[#2b2d42]">
                Activity Status
              </h4>
              <div className="flex items-center gap-3">
                <Checkbox
                  id="activityStatus"
                  checked={privacy.activityStatus}
                  onCheckedChange={(val:any) =>
                    setPrivacy({ ...privacy, activityStatus: !!val })
                  }
                  className="border-[#d1d5db] data-[state=checked]:bg-[#50b5ff] data-[state=checked]:border-[#50b5ff]"
                />
                <Label
                  htmlFor="activityStatus"
                  className="text-sm font-medium text-gray-700"
                >
                  Show Activity Status
                </Label>
              </div>
              <p className="mt-2 text-[#738b9a] text-sm">
                A reader will be distracted by readable content when looking at
                its layout.
              </p>
            </section>

            <hr />

            {/* Story Sharing */}
            <section>
              <h4 className="text-base font-semibold mb-2 text-[#2b2d42]">
                Story Sharing
              </h4>
              <div className="flex items-center gap-3">
                <Checkbox
                  id="storySharing"
                  checked={privacy.storySharing}
                  onCheckedChange={(val:any) =>
                    setPrivacy({ ...privacy, storySharing: !!val })
                  }
                  className="border-[#d1d5db] data-[state=checked]:bg-[#50b5ff] data-[state=checked]:border-[#50b5ff]"
                />
                <Label
                  htmlFor="storySharing"
                  className="text-sm font-medium text-gray-700"
                >
                  Allow Sharing
                </Label>
              </div>
              <p className="mt-2 text-[#738b9a] text-sm">
                Readers are distracted by readable content; Lorem Ipsum ensures
                better readability.
              </p>
            </section>

            <hr />

            {/* Photo of You */}
            <section>
              <h4 className="text-base font-semibold mb-2 text-[#2b2d42]">
                Photo of You
              </h4>
              <RadioGroup
                value={privacy.photoOfYou}
                onValueChange={(val: string) =>
                  setPrivacy({ ...privacy, photoOfYou: val })
                }
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="automatically"
                    id="automatically"
                    className="data-[state=checked]:border-[#50b5ff] data-[state=checked]:text-[#50b5ff]"
                  />
                  <Label htmlFor="automatically">Add Automatically</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="manualy"
                    id="manualy"
                    className="data-[state=checked]:border-[#50b5ff] data-[state=checked]:text-[#50b5ff]"
                  />
                  <Label htmlFor="manualy">Add Manually</Label>
                </div>
              </RadioGroup>
              <p className="mt-2 text-[#738b9a] text-sm">
                It is a long established fact that readable content distracts
                readers.
              </p>
            </section>

            <hr />

            {/* Profile Visibility */}
            <section>
              <h4 className="text-base font-semibold mb-2 text-[#2b2d42]">
                Your Profile
              </h4>
              <RadioGroup
                value={privacy.profileVisibility}
                onValueChange={(val: string) =>
                  setPrivacy({ ...privacy, profileVisibility: val })
                }
                className="space-y-2"
              >
                {["public", "friend", "specific", "onlyme"].map((val) => (
                  <div key={val} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={val}
                      id={val}
                      className="data-[state=checked]:border-[#50b5ff] data-[state=checked]:text-[#50b5ff]"
                    />
                    <Label htmlFor={val} className="capitalize">
                      {val === "onlyme" ? "Only Me" : val}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              <p className="mt-2 text-[#738b9a] text-sm">
                A long established fact that readable content distracts readers.
              </p>
            </section>

            <hr />

            {/* Login Notification */}
            <section>
              <h4 className="text-base font-semibold mb-2 text-[#2b2d42]">
                Login Notification
              </h4>
              <RadioGroup
                value={privacy.loginNotification}
                onValueChange={(val: string) =>
                  setPrivacy({ ...privacy, loginNotification: val })
                }
                className="space-y-2"
              >
                {["enable", "disable"].map((val) => (
                  <div key={val} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={val}
                      id={val}
                      className="data-[state=checked]:border-[#50b5ff] data-[state=checked]:text-[#50b5ff]"
                    />
                    <Label htmlFor={val} className="capitalize">
                      {val}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              <p className="mt-2 text-[#738b9a] text-sm">
                Lorem Ipsum is simply dummy text used in typesetting.
              </p>
            </section>

            <hr />

            {/* Privacy Help */}
            <section>
              <h4 className="text-base font-semibold mb-2 text-[#2b2d42]">
                Privacy Help
              </h4>
              <Link
                href="#"
                className="flex items-center gap-2 text-[#50b5ff] hover:underline"
              >
                <Megaphone className="w-5 h-5" />
                <span>Support</span>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySetting;
