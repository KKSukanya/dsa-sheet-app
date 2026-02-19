const mongoose = require('mongoose');
require('dotenv').config();
const Topic = require('./models/Topic');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"));

const seedData = async () => {
  await Topic.deleteMany();

  await Topic.insertMany([
    {
      name: "Arrays",
      subTopics: [
        {
          name: "Two Sum",
          leetcode: "https://leetcode.com/problems/two-sum/",
          youtube: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
          article: "https://www.geeksforgeeks.org/two-sum-problem/",
          level: "Easy",
          status: "Pending"
        },
        {
          name: "Maximum Subarray",
          leetcode: "https://leetcode.com/problems/maximum-subarray/",
          youtube: "https://www.youtube.com/watch?v=5WZl3MMT0Eg",
          article: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",
          level: "Medium",
          status: "Pending"
        },
        {
          name: "Best Time to Buy and Sell Stock",
          leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
          youtube: "https://www.youtube.com/watch?v=1pkOgXD63yU",
          article: "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/",
          level: "Easy",
          status: "Pending"
        },
        {
          name: "Trapping Rain Water",
          leetcode: "https://leetcode.com/problems/trapping-rain-water/",
          youtube: "https://www.youtube.com/watch?v=ZI2z5pq0TqA",
          article: "https://www.geeksforgeeks.org/trapping-rain-water/",
          level: "Hard",
          status: "Pending"
        }

      ]
    },
    {
      name: "Linked List",
      subTopics: [
        {
          name: "Reverse Linked List",
          leetcode: "https://leetcode.com/problems/reverse-linked-list/",
          youtube: "https://www.youtube.com/watch?v=G0_I-ZF0S38",
          article: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
          level: "Easy",
          status: "Pending"
        },
        {
          name: "Detect Cycle in Linked List",
          leetcode: "https://leetcode.com/problems/linked-list-cycle/",
          youtube: "https://www.youtube.com/watch?v=gBTe7lFR3vc",
          article: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/",
          level: "Medium",
          status: "Pending"
        },
        {
          name: "Merge Two Sorted Lists",
          leetcode: "https://leetcode.com/problems/merge-two-sorted-lists/",
          youtube: "https://www.youtube.com/watch?v=XIdigk956u0",
          article: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",
          level: "Easy",
          status: "Pending"
        },
        {
          name: "Merge k Sorted Lists",
          leetcode: "https://leetcode.com/problems/merge-k-sorted-lists/",
          youtube: "https://www.youtube.com/watch?v=q5a5OiGbT6Q",
          article: "https://www.geeksforgeeks.org/merge-k-sorted-linked-lists/",
          level: "Hard",
          status: "Pending"
        }

      ]
    },
    {
      name: "Recursion & Backtracking",
      subTopics: [
        {
          name: "Subsets",
          leetcode: "https://leetcode.com/problems/subsets/",
          youtube: "https://www.youtube.com/watch?v=REOH22Xwdkk",
          article: "https://www.geeksforgeeks.org/backtracking-to-find-all-subsets/",
          level: "Medium",
          status: "Pending"
        },
        {
          name: "Combination Sum",
          leetcode: "https://leetcode.com/problems/combination-sum/",
          youtube: "https://www.youtube.com/watch?v=GBKI9VSKdGg",
          article: "https://www.geeksforgeeks.org/combinational-sum/",
          level: "Medium",
          status: "Pending"
        },
        {
          name: "Permutations",
          leetcode: "https://leetcode.com/problems/permutations/",
          youtube: "https://www.youtube.com/watch?v=s7AvT7cGdSo",
          article: "https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/",
          level: "Medium",
          status: "Pending"
        },
        {
          name: "N-Queens",
          leetcode: "https://leetcode.com/problems/n-queens/",
          youtube: "https://www.youtube.com/watch?v=i05Ju7AftcM",
          article: "https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/",
          level: "Hard",
          status: "Pending"
        }

      ]
    },
    {
      name: "Graphs",
      subTopics: [
        {
          name: "Number of Islands",
          leetcode: "https://leetcode.com/problems/number-of-islands/",
          youtube: "https://www.youtube.com/watch?v=pV2kpPD66nE",
          article: "https://www.geeksforgeeks.org/find-the-number-of-islands/",
          level: "Medium",
          status: "Pending"
        },
        {
          name: "Course Schedule",
          leetcode: "https://leetcode.com/problems/course-schedule/",
          youtube: "https://www.youtube.com/watch?v=EgI5nU9etnU",
          article: "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/",
          level: "Medium",
          status: "Pending"
        },
        {
          name: "Word Ladder",
          leetcode: "https://leetcode.com/problems/word-ladder/",
          youtube: "https://www.youtube.com/watch?v=h9iTnkgv05E",
          article: "https://www.geeksforgeeks.org/word-ladder-length-of-shortest-chain-to-reach-a-target-word/",
          level: "Hard",
          status: "Pending"
        }
      ]
    }

  ]);

  console.log("Data Seeded Successfully");
  process.exit();
};

seedData();
