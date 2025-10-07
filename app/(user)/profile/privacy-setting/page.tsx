"use client";
import React, { useState } from "react";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import { Switch } from "@/components/ui/switch";
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
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg">
          <div className="px-6 py-4 flex items-center justify-between">
            <h4 className="text-lg font-semibold text-gray-800">
              Privacy Setting
            </h4>
          </div>

       
          <div className="p-6 space-y-8">
            <section>
              <h4 className="text-base font-semibold mb-2 text-[#2b2d42]">Account Privacy</h4>
              <div className="flex items-center gap-3">
                <Switch
                  id="privateAccount"
                  checked={privacy.privateAccount}
                  onCheckedChange={(val) =>
                    setPrivacy({ ...privacy, privateAccount: val })
                  }
                  className="data-[state=checked]:bg-[#50b5ff]"
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
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text since the 1500s.
              </p>
            </section>

            <hr />

            <section>
              <h4 className="text-base font-semibold mb-2 text-[#2b2d42]">Activity Status</h4>
              <div className="flex items-center gap-3">
                <Switch
                  id="activityStatus"
                  checked={privacy.activityStatus}
                  onCheckedChange={(val) =>
                    setPrivacy({ ...privacy, activityStatus: val })
                  }
                  className="data-[state=checked]:bg-[#50b5ff]"
                />
                <Label
                  htmlFor="activityStatus"
                  className="text-sm font-medium text-gray-700"
                >
                  Show Activity Status
                </Label>
              </div>
              <p className="mt-2 text-[#738b9a] text-sm">
                A reader will be distracted by readable content of a page when
                looking at its layout. Lorem Ipsum has a more-or-less normal
                distribution of letters.
              </p>
            </section>

            <hr />

            <section>
              <h4 className="text-base font-semibold mb-2 text-[#2b2d42]">Story Sharing</h4>
              <div className="flex items-center gap-3">
                <Switch
                  id="storySharing"
                  checked={privacy.storySharing}
                  onCheckedChange={(val) =>
                    setPrivacy({ ...privacy, storySharing: val })
                  }
                  className="data-[state=checked]:bg-[#50b5ff]"
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

            <section>
              <h4 className="text-base font-semibold mb-2 text-[#2b2d42]">Photo of You</h4>
              <RadioGroup
                value={privacy.photoOfYou}
                onValueChange={(val:any) =>
                  setPrivacy({ ...privacy, photoOfYou: val })
                }
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="automatically" id="automatically" />
                  <Label htmlFor="automatically">Add Automatically</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="manualy" id="manualy" />
                  <Label htmlFor="manualy">Add Manually</Label>
                </div>
              </RadioGroup>
              <p className="mt-2 text-[#738b9a] text-sm">
                It is a long established fact that a reader will be distracted
                by the readable content of a page layout.
              </p>
            </section>

            <hr />

            <section>
              <h4 className="text-base font-semibold mb-2 text-[#2b2d42]">Your Profile</h4>
              <RadioGroup
                value={privacy.profileVisibility}
                onValueChange={(val:any) =>
                  setPrivacy({ ...privacy, profileVisibility: val })
                }
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="public" id="public" />
                  <Label htmlFor="public">Public</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="friend" id="friend" />
                  <Label htmlFor="friend">Friend</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="specific" id="specific" />
                  <Label htmlFor="specific">Specific Friend</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="onlyme" id="onlyme" />
                  <Label htmlFor="onlyme">Only Me</Label>
                </div>
              </RadioGroup>
              <p className="mt-2 text-[#738b9a] text-sm">
                A long established fact that readable content distracts readers.
              </p>
            </section>

            <hr />

            <section>
              <h4 className="text-base font-semibold mb-2 text-[#2b2d42]">
                Login Notification
              </h4>
              <RadioGroup
                value={privacy.loginNotification}
                onValueChange={(val:any) =>
                  setPrivacy({ ...privacy, loginNotification: val })
                }
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="enable" id="enable" />
                  <Label htmlFor="enable">Enable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="disable" id="disable" />
                  <Label htmlFor="disable">Disable</Label>
                </div>
              </RadioGroup>
              <p className="mt-2 text-[#738b9a] text-sm">
                Lorem Ipsum is simply dummy text used in typesetting.
              </p>
            </section>

            <hr />

            <section>
              <h4 className="text-base font-semibold mb-2 text-[#2b2d42]">Privacy Help</h4>
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
