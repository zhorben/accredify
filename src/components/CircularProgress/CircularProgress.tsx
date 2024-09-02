import { Center, RingProgress } from '@mantine/core'
import { theme } from '../../utils/tailwindConfig'

interface CircularProgressProps {
  value: number
  thickness?: number
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  thickness = 16,
}) => {
  return (
    <div className="">
      <RingProgress
        sections={[{ value, color: theme.colors.secondary }]}
        size={236}
        thickness={thickness}
        roundCaps
        label={
          <Center>
            <h2 className="h2 text-[#2B22B5]">{value}%</h2>
          </Center>
        }
      />
    </div>
  )
}
