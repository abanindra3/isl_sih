"use client"

import React, { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function SelectExample() {
  const [value, setValue] = useState("")

  return (
    <div className="w-full max-w-xs space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fruit">Select a fruit</Label>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger id="fruit" className="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
            <SelectItem value="dragonfruit">Dragonfruit</SelectItem>
            <SelectItem value="elderberry">Elderberry</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="text-sm">
        Selected fruit: {value ? value : "None"}
      </div>
    </div>
  )
}