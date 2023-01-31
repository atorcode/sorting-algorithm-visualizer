import ExpandedNavBarToggleButton from "../ExpandedNavBarButton";
import styles from "./Summary.module.scss";

const Summary = () => {
  return (
    <main className={styles["main"]}>
      <article className={styles["summary"]}>
        <h2>Sorting Algorithms</h2>
        <p>
          In computer science, a sorting algorithm is a finite procedure of
          sequential, well-defined instructions that operates on data and
          organizes it to satisfy some ordering property according to some
          criteria, e.g., ascending numerical or lexicographical order.
        </p>
        <p>
          When it comes to designing algorithms, maximizing efficiency is the
          name of the game, and the way to achieve this is by minimizing
          resource usage. The amount of resources that are required to run an
          algorithm is referred to as the algorithm's computational complexity,
          or simply complexity. Moreover, the resources we care about optimizing
          are time (runtime) and space (memory). These cannot be compared
          directly or reduced to each other, so which of two algorithms is
          considered more efficient will also sometimes depend on which of these
          two metrics is given more importance. This, in turn, depends heavily
          on implementation details such as hardware limitations, cost, etc.
        </p>
        <p>
          Furthermore, when we analyze the complexity of an algorithm to use in
          our program, we typically care about the worst or average-case
          performance of that algorithm. While best-case performance can be an
          interesting area of study for theoretical computer scientists, it
          should not be much of a factor when deliberating about which algorithm
          to implement. In other words, it is unreasonable to expect that we can
          reliably achieve best-case performance in practice, for this would
          require us to be lucky all the time.
        </p>
        <p>
          The standard way to express the complexity of an algorithm is by using
          Big O notation. The "O" in Big O represents the locution "Order of",
          so the expression O(n) can be read as "order of n", "big O of n", or
          simply "O of n". Correspondingly, the term <em>n</em> is used to
          generically denote the growth rate of the input, but other terms are
          needed when multiple input variables have varying growth rates, e.g.,
          O(ab).
        </p>
        <p>
          It is important to recognize that Big O notation describes the
          complexity of an algorithm as the size of its arbitrarily large input
          approaches infinity. In this way, the kind of complexity we are
          concerned with when analyzing an algorithm is its asymptotic
          complexity.
        </p>
        <p>
          There are many complexity classes that an algorithm can fall under,
          but some of the most common ones are Constant O(1), Logarithmic O(log
          n), Linear O(n), Polynomial O(n<sup>c</sup>), and Exponential O(c
          <sup>n</sup>), where <em>c</em> is some constant.
        </p>
        <p>
          In the case of O(ab), <em>ab</em> is a multivariate polynomial of
          degree 2. <em>a</em> and <em>b</em> have different rates of growth,
          and each one grows linearly with respect to itself. However, the
          complexity of the expression as a whole can be close to linear or
          close to quadratic (polynomial) depending on the values of the
          variables. Therefore, it does not fit neatly into one of the
          aforementioned categories.
        </p>
        <p>
          In more complicated, multi-step algorithms, sorting data is often a
          necessary first step for future operations to be performed optimally.
          In fact, even in the relatively simple case of searching for a number
          in a list, sorting the list first can pay dividends. If the list is
          unsorted, then you cannot expect the search to take less than O(n) or
          linear time on average. On the other hand, if you maintain the list as
          a sorted array, then you can perform the binary search algorithm on it
          to achieve O(log n) or logarithmic time.
        </p>
        <p>
          The intuition behind this is that if a list is unsorted, then you more
          or less have to check every element one by one. You can go from left
          to right, right to left, or choose some other way, but you have to
          check every single element or else you won't be sure that you didn't
          miss your target. On the contrary, if a list is sorted, then you can
          check the middle element, perform a basic comparison, and remove half
          of the elements. Then, you can do this recursively, cutting the search
          space in half each time until you either find your target or confirm
          that it isn't in the list. Simply put, knowing that a list is sorted
          allows you to take shortcuts that speed things up.
        </p>
        <p>
          So you've understood the importance of sorting. The only question that
          remains is which sorting algorithm should you use. There are dozens of
          them, but some are clearly better than others. Nevertheless, there are
          several efficient ones, each with their own merits. It is my hope that
          this visualizer can serve as an aid for those who are interested in
          learning what goes on in different sorting algorithms, and perhaps
          even provide some guidance to those who are looking to choose the best
          algorithm for their use case.
        </p>
      </article>
      <div className={styles["button-container"]}>
        <ExpandedNavBarToggleButton text={"ALGORITHMS"} />
      </div>
    </main>
  );
};

export default Summary;
