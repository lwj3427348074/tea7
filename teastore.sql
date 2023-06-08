/*
 Navicat Premium Data Transfer

 Source Server         : 密码：admin123
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : teastore

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 08/06/2023 22:27:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `uId` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `province` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `county` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `addressDetail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `isDefault` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `areaCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES (9, 12, '张三2', '17788889999', '福建省', '厦门市', '集美区', '1023', '0', '350211');
INSERT INTO `address` VALUES (10, 12, '李四', '16655442233', '吉林省', '辽源市', '东丰县', '2230', '0', '220421');
INSERT INTO `address` VALUES (11, 12, '王五', '15548889666', '澳门特别行政区', '离岛', '嘉模堂区', '7756', '1', '820202');

-- ----------------------------
-- Table structure for goods_cart
-- ----------------------------
DROP TABLE IF EXISTS `goods_cart`;
CREATE TABLE `goods_cart`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `uId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `goods_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `goods_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `goods_price` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `goods_num` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `goods_imgUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_cart
-- ----------------------------
INSERT INTO `goods_cart` VALUES (26, '12', '82', '正山小种3號150g', '99', '1', './images/home/recommend/recommend3.jpg');
INSERT INTO `goods_cart` VALUES (27, '12', '91', '雨前珍稀白茶1号', '68', '1', './images/home/favorite/favorite1.png');
INSERT INTO `goods_cart` VALUES (28, '12', '92', '武夷山灰芽花香金骏眉3号', '128', '1', './images/home/favorite/favorite2.jpeg');
INSERT INTO `goods_cart` VALUES (29, '12', '93', '2023春茶明前龙井飞花', '128', '1', './images/home/favorite/favorite3.jpeg');

-- ----------------------------
-- Table structure for goods_list
-- ----------------------------
DROP TABLE IF EXISTS `goods_list`;
CREATE TABLE `goods_list`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `num` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `zh` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 95 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_list
-- ----------------------------
INSERT INTO `goods_list` VALUES (1, '绿茶', NULL, '88', '1', '/images/list/product1.jpeg', NULL);
INSERT INTO `goods_list` VALUES (2, '雨前头采碧螺春1号散茶', NULL, '44', '2', '/images/list/product2.jpeg', NULL);
INSERT INTO `goods_list` VALUES (3, '黄山太平猴魁绿茶1号', NULL, '22', '3', '/images/list/product3.png', NULL);
INSERT INTO `goods_list` VALUES (4, '无烟工艺正山小种2号', NULL, NULL, '4', '/images/list/product4.png', NULL);
INSERT INTO `goods_list` VALUES (80, '龙井1號铁罐250g', '鲜爽甘醇 口粮首选', '68', '5', '/images/home/recommend/recommend1.jpg', NULL);
INSERT INTO `goods_list` VALUES (81, '铁观音2號250g', '核心产区滋味正', '128', '6', './images/home/recommend/recommend2.jpg', NULL);
INSERT INTO `goods_list` VALUES (82, '正山小种3號150g', '难以忘怀的桂花香', '99', '7', './images/home/recommend/recommend3.jpg', NULL);
INSERT INTO `goods_list` VALUES (91, '雨前珍稀白茶1号', '泡后酷似凤羽，名为白茶实为绿茶，新手辨茶不可绕过的路。', '68', '8', './images/home/favorite/favorite1.png', NULL);
INSERT INTO `goods_list` VALUES (92, '武夷山灰芽花香金骏眉3号', '全芽采摘，特色是香气浓，口感偏向清甜类型，适合简单泡饮\r\n', '128', '9', './images/home/favorite/favorite2.jpeg', NULL);
INSERT INTO `goods_list` VALUES (93, '2023春茶明前龙井飞花', '2023年明前龙井，全芽的外形超漂亮，口感一级棒\r\n               ', '128', '0', './images/home/favorite/favorite3.jpeg', NULL);
INSERT INTO `goods_list` VALUES (94, '云南凤庆高海拔古树滇红', '采用80年以上的古树原料制作，手工工艺细制而成', '99', NULL, './images/home/favorite/favorite4.jpeg', NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `tel` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pwd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `nickName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (9, '17770749528', '17770749528', '/images/user.jpg', '用户', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWwiOiIxNzc3MDc0OTUyOCIsImlhdCI6MTY4NjAzNzIzM30.k3p2yhitSqVWHZ0kH6lWRHpyCKMVOzWn0Vn1cFCADls');
INSERT INTO `user` VALUES (10, '17738772387', '666666', '/images/user.jpg', '用户', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWwiOiIxNzczODc3MjM4NyIsImlhdCI6MTY4NjAzNzM3NX0.NPztciqmL19C6miTYX-fE_OZC28DhIsl4tDQMDza6Hc');
INSERT INTO `user` VALUES (11, '18845050530', '18845050530', '/images/user.jpg', '用户', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWwiOiIxODg0NTA1MDUzMCIsImlhdCI6MTY4NjEwMTEyNH0.8cDXmseDVxvdy1O_XyReAU1-P5n2eRMXUgoDLF7e_Lg');
INSERT INTO `user` VALUES (12, '18714335557', '18714335557', '/images/user.jpg', '用户', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWwiOiIxODcxNDMzNTU1NyIsImlhdCI6MTY4NjIwMjYxMX0.KfrxcdB_ZuFCFXESIP2iu483Kkg9IzL01555fYWhT8M');

SET FOREIGN_KEY_CHECKS = 1;
