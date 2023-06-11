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

 Date: 11/06/2023 12:07:12
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
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES (9, 12, '张三2', '17788889999', '福建省', '厦门市', '集美区', '1023', '0', '350211');
INSERT INTO `address` VALUES (10, 12, '李四', '16655442233', '吉林省', '辽源市', '东丰县', '2230', '0', '220421');
INSERT INTO `address` VALUES (11, 12, '王五', '15548889666', '澳门特别行政区', '离岛', '嘉模堂区', '7756', '1', '820202');
INSERT INTO `address` VALUES (13, 9, '张三', '17770749528', '北京市', '北京市', '东城区', '1002', '1', '110101');

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
) ENGINE = InnoDB AUTO_INCREMENT = 32 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_cart
-- ----------------------------

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
-- Table structure for goods_order
-- ----------------------------
DROP TABLE IF EXISTS `goods_order`;
CREATE TABLE `goods_order`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `goods_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `goods_price` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `goods_num` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `order_status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `uId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_order
-- ----------------------------
INSERT INTO `goods_order` VALUES (44, '20230610174800707374', '雨前珍稀白茶1号,2023春茶明前龙井飞花', '196', '2', '1', 12);
INSERT INTO `goods_order` VALUES (45, '20230610174923226681', '正山小种3號150g,雨前珍稀白茶1号,武夷山灰芽花香金骏眉3号,2023春茶明前龙井飞花', '423', '4', '1', 12);
INSERT INTO `goods_order` VALUES (46, '20230610180319680810', '正山小种3號150g,雨前珍稀白茶1号,武夷山灰芽花香金骏眉3号,2023春茶明前龙井飞花', '423', '4', '1', 12);
INSERT INTO `goods_order` VALUES (47, '20230610181909893475', '正山小种3號150g,雨前珍稀白茶1号,武夷山灰芽花香金骏眉3号,2023春茶明前龙井飞花', '423', '4', '1', 12);
INSERT INTO `goods_order` VALUES (48, '20230610182322553383', '武夷山灰芽花香金骏眉3号,2023春茶明前龙井飞花', '256', '2', '1', 12);
INSERT INTO `goods_order` VALUES (49, '20230610182523626096', '正山小种3號150g,雨前珍稀白茶1号,武夷山灰芽花香金骏眉3号,2023春茶明前龙井飞花', '423', '4', '1', 12);
INSERT INTO `goods_order` VALUES (50, '20230610185202569669', '正山小种3號150g,雨前珍稀白茶1号,武夷山灰芽花香金骏眉3号,2023春茶明前龙井飞花', '423', '4', '1', 12);
INSERT INTO `goods_order` VALUES (51, '20230610191113729235', '正山小种3號150g,雨前珍稀白茶1号,武夷山灰芽花香金骏眉3号,2023春茶明前龙井飞花', '807', '7', '1', 12);
INSERT INTO `goods_order` VALUES (52, '20230610192109168598', '正山小种3號150g,2023春茶明前龙井飞花', '355', '3', '2', 12);
INSERT INTO `goods_order` VALUES (53, '20230610223021723905', '雨前珍稀白茶1号,武夷山灰芽花香金骏眉3号', '196', '2', '1', 9);
INSERT INTO `goods_order` VALUES (54, '20230610223040779879', '雨前珍稀白茶1号,武夷山灰芽花香金骏眉3号', '196', '2', '2', 9);
INSERT INTO `goods_order` VALUES (55, '20230610225344211751', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (56, '20230610225504400529', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (57, '20230610225549129427', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (58, '20230610230336735318', '雨前珍稀白茶1号,武夷山灰芽花香金骏眉3号', '452', '4', '2', 12);
INSERT INTO `goods_order` VALUES (59, '20230610230417729910', '龙井1號铁罐250g', '68', '1', '2', 12);
INSERT INTO `goods_order` VALUES (60, '20230610231155818376', '龙井1號铁罐250g', '68', '1', '2', 12);
INSERT INTO `goods_order` VALUES (61, '20230610231700133649', '龙井1號铁罐250g', '68', '1', '2', 12);
INSERT INTO `goods_order` VALUES (62, '20230610232725778497', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (63, '20230610233211993704', '铁观音2號250g', '128', '1', '2', 9);
INSERT INTO `goods_order` VALUES (64, '20230610233531230832', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (65, '20230610233935127583', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (66, '20230610234021158750', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (67, '20230610234058783370', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (68, '20230610234435818552', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (69, '20230610234519927549', '正山小种3號150g', '99', '1', '2', 9);
INSERT INTO `goods_order` VALUES (70, '20230610234904339640', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (71, '20230610235225569529', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (72, '20230610235512980038', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (73, '20230610235559457967', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (74, '20230610235733929481', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (75, '20230611000350307984', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (76, '20230611000448602804', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (77, '20230611000605871465', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (78, '20230611000641462850', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (79, '20230611000857967636', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (80, '20230611001111358401', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (81, '20230611001217132358', '铁观音2號250g', '128', '1', '2', 9);
INSERT INTO `goods_order` VALUES (82, '20230611081312761264', '龙井1號铁罐250g', '68', '1', '2', 9);
INSERT INTO `goods_order` VALUES (83, '20230611081524369092', '雨前珍稀白茶1号', '408', '6', '3', 9);
INSERT INTO `goods_order` VALUES (84, '20230611103044599977', '龙井1號铁罐250g,铁观音2號250g', '196', '2', '2', 9);
INSERT INTO `goods_order` VALUES (85, '20230611103135472754', '龙井1號铁罐250g,铁观音2號250g', '196', '2', '2', 9);
INSERT INTO `goods_order` VALUES (86, '20230611103220326487', '正山小种3號150g,龙井1號铁罐250g', '167', '2', '2', 9);
INSERT INTO `goods_order` VALUES (87, '20230611110439785715', '铁观音2號250g,正山小种3號150g,龙井1號铁罐250g,雨前珍稀白茶1号,武夷山灰芽花香金骏眉3号,2023春茶明前龙井飞花,云南凤庆高海拔古树滇红', '1240', '12', '2', 9);
INSERT INTO `goods_order` VALUES (88, '20230611110620930911', '雨前珍稀白茶1号,云南凤庆高海拔古树滇红', '334', '4', '2', 9);
INSERT INTO `goods_order` VALUES (89, '20230611110711252542', '武夷山灰芽花香金骏眉3号,2023春茶明前龙井飞花', '640', '5', '2', 9);
INSERT INTO `goods_order` VALUES (90, '20230611111105460405', '铁观音2號250g,正山小种3號150g', '326', '3', '2', 9);

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
INSERT INTO `user` VALUES (9, '17770749528', '17770749528', '/images/user.jpg', '用户', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWwiOiIxNzc3MDc0OTUyOCIsImlhdCI6MTY4NjQ1MDcyNywiZXhwIjoxNjg2NDUwNzg3fQ.DgUhuHQla9Qf6ivln8pD3VWL2su8oOAioVpxRiAgDHw');
INSERT INTO `user` VALUES (10, '17738772387', '666666', '/images/user.jpg', '用户', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWwiOiIxNzczODc3MjM4NyIsImlhdCI6MTY4NjAzNzM3NX0.NPztciqmL19C6miTYX-fE_OZC28DhIsl4tDQMDza6Hc');
INSERT INTO `user` VALUES (11, '18845050530', '18845050530', '/images/user.jpg', '用户', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWwiOiIxODg0NTA1MDUzMCIsImlhdCI6MTY4NjEwMTEyNH0.8cDXmseDVxvdy1O_XyReAU1-P5n2eRMXUgoDLF7e_Lg');
INSERT INTO `user` VALUES (12, '18714335557', '18714335557', '/images/user.jpg', '用户', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWwiOiIxODcxNDMzNTU1NyIsImlhdCI6MTY4NjIwMjYxMX0.KfrxcdB_ZuFCFXESIP2iu483Kkg9IzL01555fYWhT8M');

SET FOREIGN_KEY_CHECKS = 1;
