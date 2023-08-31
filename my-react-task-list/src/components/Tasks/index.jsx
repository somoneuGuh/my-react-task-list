import { Box, Flex, Text } from "@chakra-ui/react";
import { Task } from "../Task";
import styles from "./tasks.module.css";

export function Tasks({ tasks, onComplete, onDelete }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <Box className={styles.tasks} w="100%" maxW="736px" mx="auto" mt="90px" p="1rem">
      <Flex className={styles.header} justify="space-between" mb="24px">
        <Flex>
          <Text color="#4ea8de" fontSize="14px" fontWeight="700">
            Create tasks
          </Text>
          <span>{tasksQuantity}</span>
        </Flex>

        <Flex>
          <Text className={styles.textPurple} fontSize="14px" fontWeight="700">
            Completed
          </Text>
          <span>
            {completedTasks} of {tasksQuantity}
          </span>
        </Flex>
      </Flex>

      <Flex className={styles.list} flexDirection="column" gap="12px">
        {tasks.map(task => (
          <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
        ))}
      </Flex>
    </Box>
  );
}
