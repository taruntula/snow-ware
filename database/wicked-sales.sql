-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 04, 2020 at 08:21 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wicked-sales`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

DROP TABLE IF EXISTS `cartItems`;
CREATE TABLE `cartItems` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `productID` mediumint(8) UNSIGNED NOT NULL,
  `count` smallint(5) UNSIGNED NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cartID` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cartItems`
--

INSERT INTO `cartItems` (`id`, `productID`, `count`, `price`, `added`, `updated`, `cartID`) VALUES
(1, 2, 2, 2595, '2020-03-03 06:04:21', '2020-03-04 20:19:59', 19);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `id` smallint(6) NOT NULL,
  `url` varchar(150) NOT NULL,
  `product_id` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `url`, `product_id`) VALUES
(1, 'snowboard-1.png', 1),
(2, 'snowboard-1-1.png', 1),
(3, 'snowboard-1-2.png', 1),
(4, 'helmet-1.png', 2),
(5, 'helmet-1-1.png', 2),
(6, 'helmet-1-2.png', 2),
(7, 'boots-1.png', 3),
(8, 'boots-1-1.png', 3),
(9, 'boots-1-2.png', 3),
(10, 'bindings-1.png', 4),
(11, 'bindings-1-1.png', 4),
(12, 'bindings-1-2.png', 4),
(13, 'snowboard-bag-1.png', 5),
(14, 'snowboard-bag-1-1.png', 5),
(15, 'snowboard-bag-1-2.png', 5),
(16, 'snowboard-pants-1.png', 6),
(17, 'snowboard-pants-1-1.png', 6),
(18, 'snowboard-pants-1-2.png', 6);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `cartId` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `creditCard` varchar(24) NOT NULL,
  `shippingAddress` varchar(128) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderId`, `cartId`, `name`, `creditCard`, `shippingAddress`, `createdAt`) VALUES
(1, 1, 'qqweqw', '1231231231231231', 'asdasdad asdad&comma; CDdasda 12312', '2020-02-22 01:01:06'),
(2, 1, 'awawe', '1231231231212312', '131922 asas&comma; CAafasd 12222', '2020-02-22 01:35:59'),
(3, 2, 'asdasd', '1231231231231231', 'asdasdada rrtea&comma; sdasdasda 12312', '2020-02-22 01:37:53'),
(4, 3, 'asd', '1223141412222222', 'asd asda&comma; aasddas 12312', '2020-02-22 01:45:43'),
(5, 4, 'ta', '3122323213123122', 'aassa asd asd as &comma;  ', '2020-02-25 02:54:29'),
(6, 5, '', '', 'null null&comma; null null', '2020-02-26 01:33:03'),
(7, 6, 'tarun', '1222222222222222', '1212 goo ttown&comma; Califronia 92222', '2020-02-26 01:44:58'),
(9, 8, 'Tarun ', '1222233333333333', '23708 alliene ave Torrance Califronia 95001', '2020-02-26 01:51:32'),
(16, 15, 'tar', '1222222222222222', 'asdasdasd tor CAasda 12222', '2020-02-26 03:19:13');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `price` smallint(6) NOT NULL,
  `image` varchar(50) NOT NULL,
  `shortDescription` varchar(400) NOT NULL,
  `longDescription` varchar(800) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `shortDescription`, `longDescription`) VALUES
(1, 'Snowboard', 9999, 'snowboard-1.png', 'Fly a little higher with this tricked out version of our hardest charging snowboard', 'When our shapers split this snowboard, they took a natural terrain slayer and set it loose into the backcountry habitat. Now take that freeride fury and crank it up to eleven with the same technology found in our Mystery models, like Mystery Glass for unmatched power and control, and an ultra-quick methlon base. All its free-ranging attributes including a floaty, directional shape mixed with the comfort of a twin feel when cruising on a flat base translate to unrestricted freedom in pillow stacks, cliff drops, and deep, untracked pow'),
(2, 'Helmet', 2595, 'helmet-1.png', 'Easy fit adjustment and lightweight comfort meets low profile style', 'Helmet features an in-mold shell construction for superior comfort with a sleek, low profile fit and feel. A 360 Fit System provides easy, on the go fit adjustment with the turn of a dial, and the magnetic snap helmet buckle can be opened or closed with one hand, even while wearing gloves. Sleek venting throughout keeps goggles clear and maximizes comfort all day long. The expedition fleece liner and ear pads offer maximum warmth and moisture wicking comfort'),
(3, 'Snow Boots', 5400, 'boots-1.png', 'All terrain readiness in a lightweight boot that offers Total Comfort right out of the box', 'Breaking these in is nothing to fear with these boots and its Total Comfort construction. With exclusive science on the inside, you get a broken-in fit that\'s warm and comfortable right out of the box. The effortless micro adjustability and Built For Life Guarantee of the Fit System with exclusive new ropes laces means a connected feel and no wasted time, while the ultralight outsole delivers soft cushioning even in the coldest temps'),
(4, 'Bindings', 7499, 'bindings-1.png', 'Tested and proven technologies, combined in a legendary blend of comfort, performance, and all terrain versatility', 'A revolution in snowboard binding performance, the binding pairs the easiness of Spark System baseplate with exclusive features like the strap and Supergrip, both featuring the speed and strength of Double Take buckles. Topped off with an exclusive hi back featuring skintrack friendly negative Forward Lean options, this is the best possible solution for ruling the ups and downs of backcountry touring'),
(5, 'Snowboard Bag', 3300, 'snowboard-bag-1.png', 'Maximize your on tour options with separate storage for multiple decks, removable boot and binding bag, and room for plenty more', 'Super lightweight and built with rugged materials, the Board Case is like Fort Knox for your entire snowboarding arsenal. Get fully padded protection for multiple decks, super smooth skate wheels, and removable boot and binding bag (the bag also work great for laundry, lunch, wet stuff, anything really) all at a weight that leaves breathing room on the baggage scale'),
(6, 'Snowboard Pants', 1499, 'snowboard-pants-1.png', 'Seriously snug or tailored to perfection, rep your street style with a clean design offered in two distinctive fits', 'For all the benefits of space age design, it\'s still apparent that keeping it simple works, too. The less is more Pants Slim Fit meets all the requirements of first rate shred pants without appearing too techy. Whether you choose the slim fit or the tailored mid fit, there is still room to layer and tweak. The shoe lace draw cord cinch reels it in for a final sag adjustment');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cartproductid` (`productID`,`cartID`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
