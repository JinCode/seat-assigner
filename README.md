#Seat Assigner

## Problem

Assume even number of students, N are being assigned in unique pairs each day. Design an algorithm that after N-1 days, each students will pair with an unique counterpart. 

## Algorithm Illustration
### Using example of 6 people
1. Start with two columns  
| Left | Right |
| ---- | ----- |
| 1 | 4 |
| 2 | 5 |
| 3 | 6 |

2. Always fix person 1, and shift the left column downward by one unit 
| Left | Right |
| ---- | ----- |
| 1 | 4 |
| x | 5 |
| 2 | 6 |
| 3 | x |

3. Shift the right column upward by one unit  
| Left | Right |
| ---- | ----- |
| x | 4 |
| 1 | 5 |
| x | 6 |
| 2 | x |
| 3 | x |

4. Move the last person from the left column to the last person of the right column. Move the first person of the right column after person 1 in the left column.  
| Left | Right |
| ---- | ----- |
| 1 | 5 |
| 4 | 6 |
| 2 | 3 |

5. So, the next pairing plan is
1 => 5, 4 => 6, 2 => 3

### There is 5 pairing plans for 6 people
| Left | Right |
| ---- | ----- |
| 1 | 4 |
| 2 | 5 |
| 3 | 6 |

| Left | Right |
| ---- | ----- |
| 1 | 5 |
| 4 | 6 |
| 2 | 3 |

| Left | Right |
| ---- | ----- |
| 1 | 6 |
| 5 | 3 |
| 4 | 2 |

| Left | Right |
| ---- | ----- |
| 1 | 3 |
| 6 | 2 |
| 5 | 4 |

| Left | Right |
| ---- | ----- |
| 1 | 2 |
| 3 | 4 |
| 6 | 5 |







