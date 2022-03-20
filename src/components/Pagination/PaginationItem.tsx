import { Button, ButtonProps } from "@chakra-ui/react"

interface PaginationItemProps extends ButtonProps {
  isCurrent?: boolean
  number: number
  onPageChange: (page: number) => void
}

export const PaginationItem = ({
  isCurrent = false,
  onPageChange,
  number,
  ...rest
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: "default",
        }}
        {...rest}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
      onClick={() => onPageChange(number)}
      {...rest}
    >
      {number}
    </Button>
  )
}
