'use client'

import { Slider } from '@/components/ui/slider'

interface EntropySliderProps {
  wordCount: number
  setWordCount: (count: number) => void
  entropy: number
}

const EntropySlider: React.FC<EntropySliderProps> = ({ wordCount, setWordCount, entropy }) => {
  const handleChange = (value: number[]) => {
    setWordCount(value[0])
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <label>Number of Words: {wordCount}</label>
        <span className="text-muted-foreground">
          Entropy: {entropy.toFixed(1)} bits
        </span>
      </div>
      <Slider
        value={[wordCount]}
        onValueChange={handleChange}
        min={3}
        max={8}
        step={1}
        className="w-full"
      />
    </div>
  )
}

export default EntropySlider