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

 Date: 04/06/2023 19:08:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_list
-- ----------------------------
INSERT INTO `goods_list` VALUES (1, '绿茶', NULL, '88', '1', '/images/list/product1.jpeg', NULL);
INSERT INTO `goods_list` VALUES (2, '雨前头采碧螺春1号散茶', NULL, '44', '2', '/images/list/product2.jpeg', NULL);
INSERT INTO `goods_list` VALUES (3, '黄山太平猴魁绿茶1号', NULL, '22', '3', '/images/list/product3.png', NULL);
INSERT INTO `goods_list` VALUES (4, '无烟工艺正山小种2号', NULL, NULL, '4', '/images/list/product4.png', NULL);
INSERT INTO `goods_list` VALUES (5, NULL, NULL, NULL, '5', '/images/searchlist/product5.png', NULL);
INSERT INTO `goods_list` VALUES (6, NULL, NULL, NULL, '6', '/images/searchlist/product6.jpeg', NULL);
INSERT INTO `goods_list` VALUES (7, NULL, NULL, NULL, '7', '/images/searchlist/product7.jpeg', NULL);
INSERT INTO `goods_list` VALUES (8, NULL, NULL, NULL, '8', '/images/searchlist/product8.png', NULL);
INSERT INTO `goods_list` VALUES (9, NULL, NULL, NULL, '9', '/images/searchlist/product9.jpeg', NULL);
INSERT INTO `goods_list` VALUES (10, NULL, NULL, NULL, '0', '/images/searchlist/product10.png', NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (2, '13319479169', '666666', '/images/user.jpg', NULL, NULL);
INSERT INTO `user` VALUES (4, '18845050530', '666666', '/images/user.jpg', '用户', '1');
INSERT INTO `user` VALUES (5, '17738772387', '17738772387', '/images/user.jpg', '用户', '1');
INSERT INTO `user` VALUES (6, '14452665266', '999999', '/images/user.jpg', '用户', '1');

SET FOREIGN_KEY_CHECKS = 1;
