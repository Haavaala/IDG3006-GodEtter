SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `item_id` int(11) NOT NULL,
  `device_id` int(11) NOT NULL,
  `barcode` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `weight` int(11) NOT NULL,
  `weight_unit` varchar(10) NOT NULL,
  `allergens` varchar(200) NOT NULL,
  `quantity` int(11) NOT NULL,
  `date_added` datetime NOT NULL DEFAULT current_timestamp(),
  `date_bestbefore` datetime NOT NULL,
  `category_id` int(11) NOT NULL DEFAULT 1,
  `edited` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`ìtem_id`,`device_id`, `barcode`, `name`, `brand`, `weight`, `weight_unit`, `allergens`, `quantity`, `date_added`, `date_bestbefore`, `category_id`) VALUES
(0,1001, '00000', 'Example item', 'Example brand', 100, 'g', 'Example allergens', 1, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`item_id`),
  ADD KEY `device_id` (`device_id`),
  ADD KEY `fk_category_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`),
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`device_id`) REFERENCES `devices` (`device_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;