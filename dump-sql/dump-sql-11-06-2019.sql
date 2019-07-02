/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 10.1.40-MariaDB : Database - binkl_dev
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`binkl_dev` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `binkl_dev`;

/*Table structure for table `admin` */

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `date_added` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `admin` */

insert  into `admin`(`id`,`userId`,`date_added`,`createdAt`,`updatedAt`) values (1,1,'2019-06-11 23:14:32','2019-06-11 23:14:34','2019-06-11 23:14:36');

/*Table structure for table `clients` */

DROP TABLE IF EXISTS `clients`;

CREATE TABLE `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `departmentId` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `date_added` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `departmentId` (`departmentId`),
  CONSTRAINT `clients_ibfk_1` FOREIGN KEY (`departmentId`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `clients` */

insert  into `clients`(`id`,`departmentId`,`name`,`surname`,`adress`,`contact`,`email`,`date_added`,`status`,`createdAt`,`updatedAt`) values (1,1,'Client','Client 1','adrss','contact client','client@gmail;com','2019-06-11 23:12:37',1,'2019-06-11 23:12:41','2019-06-11 23:12:43');

/*Table structure for table `countries` */

DROP TABLE IF EXISTS `countries`;

CREATE TABLE `countries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `countries` */

insert  into `countries`(`id`,`name`,`code`,`createdAt`,`updatedAt`) values (1,'Madagascar','MG','2019-06-11 23:11:29','2019-06-11 23:11:32');

/*Table structure for table `departments` */

DROP TABLE IF EXISTS `departments`;

CREATE TABLE `departments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `countryId` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `countryId` (`countryId`),
  CONSTRAINT `departments_ibfk_1` FOREIGN KEY (`countryId`) REFERENCES `countries` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `departments` */

insert  into `departments`(`id`,`countryId`,`name`,`createdAt`,`updatedAt`) values (1,1,'Tana','2019-06-11 23:12:01','2019-06-11 23:11:54');

/*Table structure for table `products` */

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `date_added` datetime DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `commission_main` varchar(255) DEFAULT NULL,
  `commission_first_line` varchar(255) DEFAULT NULL,
  `commission_second_line` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `products` */

insert  into `products`(`id`,`name`,`price`,`date_added`,`active`,`commission_main`,`commission_first_line`,`commission_second_line`,`createdAt`,`updatedAt`) values (1,'Product 1',10000,'2019-06-11 23:13:02',1,'main','first line','second line','2019-06-11 23:13:21','2019-06-11 23:13:26');

/*Table structure for table `sellers` */

DROP TABLE IF EXISTS `sellers`;

CREATE TABLE `sellers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `departmentId` int(11) NOT NULL,
  `parent` int(11) DEFAULT NULL,
  `date_added` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `departmentId` (`departmentId`),
  CONSTRAINT `sellers_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `sellers_ibfk_2` FOREIGN KEY (`departmentId`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `sellers` */

insert  into `sellers`(`id`,`userId`,`departmentId`,`parent`,`date_added`,`status`,`createdAt`,`updatedAt`) values (1,1,1,0,'0000-00-00 00:00:00',5,'2019-06-11 23:13:50','2019-06-11 20:24:51'),(2,1,1,0,'0000-00-00 00:00:00',1,'2019-06-11 20:18:17','2019-06-11 20:18:17'),(3,1,1,0,'0000-00-00 00:00:00',1,'2019-06-11 20:18:46','2019-06-11 20:18:46'),(4,1,1,0,'0000-00-00 00:00:00',1,'2019-06-11 20:19:17','2019-06-11 20:19:17'),(5,1,1,0,'0000-00-00 00:00:00',1,'2019-06-11 20:20:12','2019-06-11 20:20:12');

/*Table structure for table `sequelizemeta` */

DROP TABLE IF EXISTS `sequelizemeta`;

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `sequelizemeta` */

insert  into `sequelizemeta`(`name`) values ('20190604182737-create-countries.js'),('20190604182738-create-users.js'),('20190604182739-create-departments.js'),('20190604183100-create-sellers.js'),('20190604183428-create-admin.js'),('20190604183610-create-products.js'),('20190604184032-create-clients.js'),('20190604184403-create-subscriptions.js');

/*Table structure for table `subscriptions` */

DROP TABLE IF EXISTS `subscriptions`;

CREATE TABLE `subscriptions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clientId` int(11) NOT NULL,
  `sellerId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `date_start` datetime DEFAULT NULL,
  `date_expired` datetime DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `clientId` (`clientId`),
  KEY `sellerId` (`sellerId`),
  KEY `productId` (`productId`),
  CONSTRAINT `subscriptions_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`),
  CONSTRAINT `subscriptions_ibfk_2` FOREIGN KEY (`sellerId`) REFERENCES `sellers` (`id`),
  CONSTRAINT `subscriptions_ibfk_3` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `subscriptions` */

insert  into `subscriptions`(`id`,`clientId`,`sellerId`,`productId`,`date_start`,`date_expired`,`comments`,`active`,`createdAt`,`updatedAt`) values (1,1,1,1,'2019-06-11 23:14:08','2019-06-11 23:14:10','comments',1,'2019-06-11 23:14:19','2019-06-11 23:14:22');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`password`,`type`,`contact`,`address`,`surname`,`email`,`createdAt`,`updatedAt`) values (1,'Jeram','password',1,'contact','adress','surname','email@gmail.com','2019-06-11 23:11:04','2019-06-11 23:11:06');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
