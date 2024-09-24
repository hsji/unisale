(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            						"color" : nexacro.ColorObject("#333333"),
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"contents" :
            					{
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				},
            				"class" :
            				[
            					{
            						"frm_popDetail" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 400 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"frm_top" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"edge" : nexacro.EdgeImageObject("url('imagerc::top/bg_TF.png') 15px 15px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"MainFrame" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"ChildFrame" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				},
            				"class" :
            				[
            					{
            						"modal" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff")
            								}
            							}
            						}
            					},
            					{
            						"alert" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff")
            								}
            							}
            						}
            					}
            				]
            			},
            			"FrameSet" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"VFrameSet" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"HFrameSet" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"TileFrameSet" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            						"padding" : nexacro.PaddingObject("0px 9px")
            					},
            					"selected" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            						"padding" : nexacro.PaddingObject("0px 9px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #707070")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #707070")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#c4c4c4"),
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					}
            				},
            				"class" :
            				[
            					{
            						"btn_POP_close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_close_N.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_close_N.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_close_N.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_close_N.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_yes" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0ca950"),
            									"padding" : nexacro.PaddingObject("0px 15px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0ca950"),
            									"padding" : nexacro.PaddingObject("0px 15px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1ab85a"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1ab85a"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #009744"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #86d4a8"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_no" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 15px"),
            									"color" : nexacro.ColorObject("#0ca950"),
            									"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 15px"),
            									"color" : nexacro.ColorObject("#0ca950"),
            									"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#0ca950")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#0ca950")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#0ca950")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#c4c4c4")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_calPrev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url('theme://images/cal_prev_N.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url('theme://images/cal_prev_N.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/cal_prev_O.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/cal_prev_O.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/cal_prev_O.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/cal_prev_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_calNext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url('theme://images/cal_next_N.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url('theme://images/cal_next_N.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/cal_next_O.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/cal_next_O.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/cal_next_O.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/cal_next_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_calNumber" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#333333"),
            									"border" : nexacro.BorderObject("1px solid #ffffff")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"border" : nexacro.BorderObject("1px solid #ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("2px solid #ffffff"),
            									"color" : nexacro.ColorObject("#8b8b8b")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_calNumber_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0ca950"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_calNumber_B" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#d1d1d1"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#d1d1d1"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#d1d1d1"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#d1d1d1"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#d1d1d1"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"color" : nexacro.ColorObject("#8b8b8b")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu01" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu01_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu01_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu01_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu01_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu01_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu01_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu01_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu01_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu01_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu01_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu01_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu01_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu02" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu02_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu02_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu02_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu02_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu02_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu02_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu02_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu02_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu02_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu02_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu02_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu02_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu03" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu03_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu03_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu03_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu03_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu03_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu03_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu03_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu03_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu03_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu03_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu03_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu03_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu04" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu04_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu04_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu04_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu04_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu04_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu04_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu04_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu04_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu04_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu04_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu04_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu04_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu05" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu05_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu05_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu05_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu05_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu05_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu05_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu05_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu05_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu05_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu05_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu05_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu05_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu06" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu06_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu06_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu06_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu06_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu06_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu06_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu06_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu06_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu06_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu06_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu06_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu06_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu07" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu07_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu07_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu07_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu07_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu07_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu07_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu07_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu07_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu07_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu07_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu07_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu07_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu08" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu08_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu08_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu08_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu08_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu08_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu08_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu08_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu08_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu08_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu08_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu08_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu08_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu09" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu09_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu09_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu09_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu09_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu09_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu09_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu09_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu09_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu09_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu09_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu09_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu09_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu10" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu10_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu10_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu10_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu10_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu10_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu10_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu10_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu10_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu10_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu10_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu10_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu10_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu11" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu11_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu11_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu11_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu11_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu11_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu11_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu11_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu11_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu11_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu11_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu11_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu11_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu12" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu12_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu12_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu12_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu12_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu12_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_menu12_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu12_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu12_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu12_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu12_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu12_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_menu12_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_help" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_help_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_help_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_help_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_help_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_help_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_foldingOff" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_arrowRight_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_arrowRight_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_arrowRight_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_arrowRight_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_arrowRight_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_foldingOn" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_arrowLeft_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_arrowLeft_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_arrowLeft_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_arrowLeft_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_arrowLeft_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_sampleTip" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_sampleTip_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_sampleTip_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_sampleTip_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_sampleTip_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_sampleTip_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_sampleTip_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_sampleTip_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_sampleTip_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_sampleTip_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_sampleTip_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_sampleTip_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_sampleTip_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_folder" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_folder_N.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#a2a5a4"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_folder_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_folder_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_folder_O.png')"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_folder_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_folder_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_folder_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_folder_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_folder_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_folder_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_folder_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_LF_folder_O.png')"),
            									"iconPosition" : "left",
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_subMenu_close.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_subMenu_close.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_subMenu_search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 7px 0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_subMenu_search_N.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 7px 0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_subMenu_search_N.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px dashed #222222")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_subMenu_search_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_subMenu_foliderClose" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_subMenu_folderClose_N.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_subMenu_folderClose_N.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_subMenu_folderClose_O.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_subMenu_folderClose_O.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_subMenu_folderClose_O.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent")
            								}
            							}
            						}
            					},
            					{
            						"btn_subMenu_foliderOpen" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_subMenu_folderOpen_N.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 8px"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_subMenu_folderOpen_N.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_subMenu_folderOpen_O.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_subMenu_folderOpen_O.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('imagerc::left/img_subMenu_folderOpen_O.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_bell" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 7px"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_bellOn_N.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 7px"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_bellOn_N.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_bellOn_O.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_bellOn_O.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_bellOn_O.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_bellOn_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_closeAll" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 7px"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_closeAll_N.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 7px"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_closeAll_N.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_closeAll_O.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_closeAll_O.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_closeAll_O.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_closeAll_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_openList" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 7px"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_openpageList_N.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 7px"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_openpageList_N.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_openpageList_O.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_openpageList_O.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_openpageList_O.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_openpageList_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_tabBtn" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 52px 0px 24px"),
            									"color" : nexacro.ColorObject("#444444"),
            									"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#000000")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#000000")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#000000")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#999999")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 52px 0px 24px"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            									"edge" : nexacro.EdgeImageObject("url('imagerc::top/tab_TF_S.png') 60px 5px")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_tabBtn_S" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 52px 0px 24px"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            									"edge" : nexacro.EdgeImageObject("url('imagerc::top/tab_TF_S.png') 60px 5px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 52px 0px 24px"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            									"edge" : nexacro.EdgeImageObject("url('imagerc::top/tab_TF_S.png') 60px 5px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 52px 0px 24px"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            									"edge" : nexacro.EdgeImageObject("url('imagerc::top/tab_TF_S.png') 60px 5px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 52px 0px 24px"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            									"edge" : nexacro.EdgeImageObject("url('imagerc::top/tab_TF_S.png') 60px 5px")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 52px 0px 24px"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            									"edge" : nexacro.EdgeImageObject("url('imagerc::top/tab_TF_S.png') 60px 5px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 52px 0px 24px"),
            									"color" : nexacro.ColorObject("#999999")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_extra" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_close_N.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_close_N.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_close_O.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_close_O.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_close_O.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_close_N.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_next" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 7px"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_next_N.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 7px"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_next_N.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_next_O.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_next_O.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_next_O.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_next_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_prev" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 7px"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_prev_N.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 7px"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_prev_N.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_prev_O.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_prev_O.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffffff"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_prev_O.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_prev_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_login_forgot" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 4px"),
            									"color" : nexacro.ColorObject("#0ca950"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 4px"),
            									"color" : nexacro.ColorObject("#0ca950"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#0ca950")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#0ca950")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#0ca950")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#c0c4cc")
            								}
            							}
            						}
            					},
            					{
            						"btn_login_login" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0ca950"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 16px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #0ca950"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 16px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1ab85a"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #1ab85a"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #009744"),
            									"color" : nexacro.ColorObject("#ffffff")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d4d7de"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_TFDM_Crud" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3073c7"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3073c7"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3073c7")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3073c7")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3073c7")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_TFDM_CloseEdit" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_TFDM_Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_TFDM_Save" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px solid #e1e1e1"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700 14px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px solid #e1e1e1"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700 14px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e1e1e1"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700 14px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e1e1e1"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700 14px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e1e1e1"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700 14px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_TFDM_Step" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px solid #F4F7FF"),
            									"color" : nexacro.ColorObject("#8CA0D4"),
            									"font" : nexacro.FontObject("normal 700 15px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px solid #F4F7FF"),
            									"color" : nexacro.ColorObject("#8CA0D4"),
            									"font" : nexacro.FontObject("normal 700 15px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #F4F7FF"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700 15px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #F4F7FF"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700 15px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #F4F7FF"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700 15px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_TFDM_Add" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #5271C1"),
            									"color" : nexacro.ColorObject("#5271C1"),
            									"font" : nexacro.FontObject("normal 700 12px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #5271C1"),
            									"color" : nexacro.ColorObject("#5271C1"),
            									"font" : nexacro.FontObject("normal 700 12px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid #F89066"),
            									"color" : nexacro.ColorObject("#5271C1"),
            									"font" : nexacro.FontObject("normal 700 12px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #F89066"),
            									"color" : nexacro.ColorObject("#5271C1"),
            									"font" : nexacro.FontObject("normal 700 12px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #F89066"),
            									"color" : nexacro.ColorObject("#5271C1"),
            									"font" : nexacro.FontObject("normal 700 12px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_TFDM_Refresh" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_ProjectCardAdd" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_time" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_WF_time_N.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_WF_time_N.png')")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/img_WF_time_O.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/img_WF_time_O.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/img_WF_time_O.png')"),
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_WF_time_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_timeUp" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("URL('theme://images/pmenu_prev_N.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("URL('theme://images/pmenu_prev_N.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('theme://images/pmenu_prev_O.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('theme://images/pmenu_prev_O.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('theme://images/pmenu_prev_O.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('theme://images/pmenu_prev_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_timeDown" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("URL('theme://images/pmenu_next_N.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"icon" : nexacro.UrlObject("URL('theme://images/pmenu_next_N.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('theme://images/pmenu_next_O.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('theme://images/pmenu_next_O.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('theme://images/pmenu_next_O.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL('theme://images/pmenu_next_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_alert_yes" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 16px"),
            									"color" : nexacro.ColorObject("#0ca950"),
            									"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 16px"),
            									"color" : nexacro.ColorObject("#0ca950"),
            									"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#0ca950")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#0ca950")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#0ca950")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#c0c4cc")
            								}
            							}
            						}
            					},
            					{
            						"btn_alert_no" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 16px"),
            									"color" : nexacro.ColorObject("#0ca950"),
            									"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px 16px"),
            									"color" : nexacro.ColorObject("#0ca950"),
            									"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#0ca950")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#0ca950")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#0ca950")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#c0c4cc")
            								}
            							}
            						}
            					},
            					{
            						"btn_alert_close" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_close.png')"),
            									"padding" : nexacro.PaddingObject("5px")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_close.png')"),
            									"padding" : nexacro.PaddingObject("5px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px dashed #000000")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_setting" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 6px"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_setting_N.png')")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 6px"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_setting_N.png')")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_setting_O.png')")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_setting_O.png')")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_setting_O.png')")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_setting_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_edit" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 12px"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_edit_N.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px 12px"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_edit_N.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_edit_O.png')"),
            									"color" : nexacro.ColorObject("#262626")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_edit_O.png')"),
            									"color" : nexacro.ColorObject("#262626")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_edit_O.png')"),
            									"color" : nexacro.ColorObject("#262626")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_edit_D.png')"),
            									"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_photo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 12px"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_photo_N.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px 12px"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_photo_N.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_photo_O.png')"),
            									"color" : nexacro.ColorObject("#262626")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_photo_O.png')"),
            									"color" : nexacro.ColorObject("#262626")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_photo_O.png')"),
            									"color" : nexacro.ColorObject("#262626")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_photo_D.png')"),
            									"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_POP_remove" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 12px"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_remove_N.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"selected" :
            								{
            									"padding" : nexacro.PaddingObject("0px 12px"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_remove_N.png')"),
            									"border" : nexacro.BorderObject("0px none"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px"),
            									"color" : nexacro.ColorObject("#262626"),
            									"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_remove_O.png')"),
            									"color" : nexacro.ColorObject("#262626")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_remove_O.png')"),
            									"color" : nexacro.ColorObject("#262626")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_remove_O.png')"),
            									"color" : nexacro.ColorObject("#262626")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("url('theme://images/img_POP_remove_D.png')"),
            									"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					}
            				]
            			},
            			"FileDownload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            						"padding" : nexacro.PaddingObject("0px 9px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #707070"),
            						"color" : nexacro.ColorObject("#262626")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #707070"),
            						"color" : nexacro.ColorObject("#262626")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #afafaf"),
            						"color" : nexacro.ColorObject("#000000")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#c4c4c4"),
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					}
            				}
            			},
            			"ButtonControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"fileuploaditem" :
            			{
            				"parent" :
            				{
            					"FileUpload" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditemedit" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"padding" : nexacro.PaddingObject("1px 9px 0px 9px"),
            										"edge" : nexacro.EdgeImageObject("url('theme://images/edt_N.png') 10px 10px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"edge" : nexacro.EdgeImageObject("url('theme://images/edt_O.png') 10px 10px")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"edge" : nexacro.EdgeImageObject("url('theme://images/edt_O.png') 10px 10px")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"edge" : nexacro.EdgeImageObject("url('theme://images/edt_D.png') 10px 10px")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#999999"),
            										"border" : nexacro.BorderObject("0px none"),
            										"edge" : nexacro.EdgeImageObject("url('theme://images/edt_D.png') 10px 10px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditembutton" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c2c2c2"),
            										"padding" : nexacro.PaddingObject("1px 9px 0px 9px"),
            										"color" : nexacro.ColorObject("#c2c2c2")
            									},
            									"selected" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c2c2c2"),
            										"padding" : nexacro.PaddingObject("1px 9px 0px 9px"),
            										"color" : nexacro.ColorObject("#c2c2c2")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #707070"),
            										"color" : nexacro.ColorObject("#262626")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #707070"),
            										"color" : nexacro.ColorObject("#262626")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("1px solid #afafaf"),
            										"color" : nexacro.ColorObject("#000000")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#c4c4c4"),
            										"border" : nexacro.BorderObject("1px solid #ededed")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				},
            				"class" :
            				[
            					{
            						"cal_POP_period" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"CalendarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_drop_N.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cal_drop_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cal_drop_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cal_drop_D.png')")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_drop_N.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cal_drop_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cal_drop_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cal_drop_D.png')")
            							}
            						}
            					},
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropN.png')")
            							},
            							"selected" :
            							{
            								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropN.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropO.png')")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropO.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropO.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropN.png')")
            							},
            							"selected" :
            							{
            								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropN.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropO.png')")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropO.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropO.png')")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_cal_drop_N.png')")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_cal_drop_N.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_cal_drop_D.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_cal_drop_O.png')")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_cal_drop_O.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_cal_drop_O.png')")
            									}
            								}
            							}
            						}
            					},
            					"MultiCombo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropN.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropO.png')")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropO.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropO.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropO.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropD.png')")
            							}
            						}
            					},
            					"MultiComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 2px 0px 0px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropN.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropO.png')")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropO.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropO.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropO.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropD.png')")
            							}
            						}
            					}
            				}
            			},
            			"calendarspinupbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_upN.png')"),
            								"padding" : nexacro.PaddingObject("2px 0px 0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_upO.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_upO.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_upD.png')")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_upN.png')"),
            								"padding" : nexacro.PaddingObject("2px 0px 0px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_upO.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_upO.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_upD.png')")
            							}
            						}
            					}
            				}
            			},
            			"calendarspindownbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_downN.png')"),
            								"padding" : nexacro.PaddingObject("0px 0px 2px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_downO.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_downO.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_downD.png')")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_downN.png')"),
            								"padding" : nexacro.PaddingObject("0px 0px 2px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_downO.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_downO.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_downD.png')")
            							}
            						}
            					}
            				}
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_N.png')"),
            						"textPadding" : nexacro.PaddingObject("0px 20px 0px 7px")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_N.png')")
            					},
            					"readonly" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_D.png')"),
            						"color" : nexacro.ColorObject("#555555")
            					},
            					"readonly_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_RS.png')"),
            						"color" : nexacro.ColorObject("#555555")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_S.png')"),
            						"color" : nexacro.ColorObject("#222222")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_D.png')")
            					},
            					"disabled_selected" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_DS.png')")
            					}
            				},
            				"class" :
            				[
            					{
            						"chk_TF_bell" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_bellOff_N.png')"),
            									"textPadding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_bellOff_N.png')")
            								},
            								"readonly" :
            								{
            									"icon" : nexacro.UrlObject("URL('theme://images/img_TF_bellOff_N.png')")
            								},
            								"readonly_selected" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_bellOn_N.png')")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_bellOn_N.png')")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_bellOff_D.png')")
            								},
            								"disabled_selected" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::top/img_TF_bellOn_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"chk_login" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::login/img_login_hide_N.png')"),
            									"textPadding" : nexacro.PaddingObject("0px")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::login/img_login_hide_N.png')"),
            									"textPadding" : nexacro.PaddingObject("0px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::login/img_login_hide_N.png')")
            								},
            								"readonly" :
            								{
            									"icon" : nexacro.UrlObject("URL('theme://images/img_login_hide_N.png')")
            								},
            								"readonly_selected" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::login/img_login_view_N.png')")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::login/img_login_view_N.png')")
            								},
            								"mouseover_selected" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::login/img_login_view_N.png')")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::login/img_login_hide_D.png')")
            								},
            								"disabled_selected" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::login/img_login_view_D.png')")
            								}
            							}
            						}
            					},
            					{
            						"chk_login_save" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::login/chk_login_N.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 4px 0px 8px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"focused" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::login/chk_login_N.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 4px 0px 8px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::login/chk_login_N.png')")
            								},
            								"readonly" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::login/chk_login_N.png')"),
            									"color" : nexacro.ColorObject("#555555")
            								},
            								"readonly_selected" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::login/chk_login_S.png')"),
            									"color" : nexacro.ColorObject("#555555")
            								},
            								"selected" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::login/chk_login_S.png')"),
            									"color" : nexacro.ColorObject("#222222")
            								},
            								"mouseover_selected" :
            								{
            									"icon" : nexacro.UrlObject("url('imagerc::login/chk_login_S.png')"),
            									"color" : nexacro.ColorObject("#222222")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#999999"),
            									"icon" : nexacro.UrlObject("url('imagerc::login/chk_login_N.png')")
            								},
            								"disabled_selected" :
            								{
            									"color" : nexacro.ColorObject("#999999"),
            									"icon" : nexacro.UrlObject("url('imagerc::login/chk_login_S.png')")
            								}
            							}
            						}
            					}
            				]
            			},
            			"CheckBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_N.png')"),
            						"textPadding" : nexacro.PaddingObject("0px 20px 0px 7px")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_N.png')")
            					},
            					"readonly" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_D.png')"),
            						"color" : nexacro.ColorObject("#555555")
            					},
            					"readonly_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_RS.png')"),
            						"color" : nexacro.ColorObject("#555555")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_S.png')"),
            						"color" : nexacro.ColorObject("#222222")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_D.png')")
            					},
            					"disabled_selected" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"icon" : nexacro.UrlObject("URL('theme://images/chk_DS.png')")
            					}
            				}
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed"),
            						"color" : nexacro.ColorObject("#999999")
            					}
            				},
            				"class" :
            				[
            					{
            						"cbo_Pop_cal" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e9e9e9")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e9e9e9")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f7f7f7")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					}
            				]
            			},
            			"ComboControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed"),
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"comboedit" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 1px 0px 9px")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 1px 0px 9px")
            							}
            						}
            					}
            				}
            			},
            			"combolist" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            								"color" : nexacro.ColorObject("#555555"),
            								"border" : nexacro.BorderObject("1px solid #b1b1b1")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            								"color" : nexacro.ColorObject("#555555"),
            								"border" : nexacro.BorderObject("1px solid #b1b1b1")
            							}
            						}
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Roboto\",\"RobotoWeb\"\n\tcolor : #555555")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            										"color" : nexacro.ColorObject("#555555")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed"),
            						"color" : nexacro.ColorObject("#999999")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#b2b2b2")
            					}
            				},
            				"class" :
            				[
            					{
            						"edt_subMenu_search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f4f4f5"),
            									"padding" : nexacro.PaddingObject("1px 26px 0px 13px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f4f4f5"),
            									"padding" : nexacro.PaddingObject("1px 26px 0px 13px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f4f4f5"),
            									"padding" : nexacro.PaddingObject("1px 26px 0px 13px")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f4f4f5")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f4f4f5"),
            									"color" : nexacro.ColorObject("#999999")
            								},
            								"nulltext" :
            								{
            									"color" : nexacro.ColorObject("#909399")
            								}
            							}
            						}
            					},
            					{
            						"edt_subMenu_search_F" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent,0px none,1px solid #0ca950"),
            									"padding" : nexacro.PaddingObject("1px 27px 0px 14px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent,0px none,1px solid #0ca950"),
            									"padding" : nexacro.PaddingObject("1px 27px 0px 14px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent,0px none,1px solid #0ca950"),
            									"padding" : nexacro.PaddingObject("1px 27px 0px 14px")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent,0px none,1px solid #0ca950"),
            									"padding" : nexacro.PaddingObject("1px 27px 0px 14px")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent,0px none,1px solid #0ca950"),
            									"padding" : nexacro.PaddingObject("1px 27px 0px 14px")
            								},
            								"nulltext" :
            								{
            									"color" : nexacro.ColorObject("#909399")
            								}
            							}
            						}
            					},
            					{
            						"edt_Login_input" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cccccc"),
            									"padding" : nexacro.PaddingObject("1px 18px 0px 18px"),
            									"font" : nexacro.FontObject("normal 400 16px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("2px solid #0ca950"),
            									"padding" : nexacro.PaddingObject("1px 17px 0px 17px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("2px solid #0ca950"),
            									"padding" : nexacro.PaddingObject("1px 17px 0px 17px")
            								}
            							}
            						}
            					},
            					{
            						"edt_Login_input_PW" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cccccc"),
            									"padding" : nexacro.PaddingObject("1px 58px 0px 18px"),
            									"font" : nexacro.FontObject("normal 400 16px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("2px solid #0ca950"),
            									"padding" : nexacro.PaddingObject("1px 57px 0px 17px")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("2px solid #0ca950"),
            									"padding" : nexacro.PaddingObject("1px 57px 0px 17px")
            								}
            							}
            						}
            					},
            					{
            						"edt_TFDM_Input" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d5d5d5"),
            									"padding" : nexacro.PaddingObject("1px 9px 0px 9px"),
            									"color" : nexacro.ColorObject("#0c0c0c"),
            									"font" : nexacro.FontObject("normal 700 11px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #5a86cd"),
            									"color" : nexacro.ColorObject("#0c0c0c"),
            									"font" : nexacro.FontObject("normal 700 11px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #5a86cd"),
            									"color" : nexacro.ColorObject("#0c0c0c"),
            									"font" : nexacro.FontObject("normal 700 11px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"readonly" :
            								{
            									"color" : nexacro.ColorObject("#0c0c0c"),
            									"font" : nexacro.FontObject("normal 700 11px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#999999"),
            									"font" : nexacro.FontObject("normal 700 11px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"edt_TFDM_essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #d5d5d5"),
            									"padding" : nexacro.PaddingObject("1px 9px 0px 9px"),
            									"color" : nexacro.ColorObject("#0c0c0c"),
            									"font" : nexacro.FontObject("normal 700 11px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#0c0c0c"),
            									"font" : nexacro.FontObject("normal 700 11px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"focused" :
            								{
            									"color" : nexacro.ColorObject("#0c0c0c"),
            									"font" : nexacro.FontObject("normal 700 11px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								},
            								"readonly" :
            								{
            									"color" : nexacro.ColorObject("#0c0c0c")
            								},
            								"disabled" :
            								{
            									"color" : nexacro.ColorObject("#999999")
            								}
            							}
            						}
            					}
            				]
            			},
            			"EditControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#b2b2b2")
            					}
            				}
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#b2b2b2")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed"),
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"MaskEditControl" :
            			{
            				"self" :
            				{
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#b2b2b2")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
            					}
            				}
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#b2b2b2")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"padding" : nexacro.PaddingObject("9px 9px 9px 9px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed"),
            						"color" : nexacro.ColorObject("#999999")
            					}
            				},
            				"class" :
            				[
            					{
            						"txa_alert_message" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"padding" : nexacro.PaddingObject("0px"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"readonly" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#333333")
            								}
            							}
            						}
            					}
            				]
            			},
            			"TextAreaControl" :
            			{
            				"self" :
            				{
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#b2b2b2")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"padding" : nexacro.PaddingObject("9px 9px 9px 9px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed"),
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed"),
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"SpinControl" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ebeef5")
            					}
            				},
            				"class" :
            				[
            					{
            						"grd_Pop_week" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_subMenu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_LF_searchResult" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_TF_openList" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_TFDM_user" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"grd_POP_notice" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"head" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #08a44d")
            							}
            						},
            						"class" :
            						[
            							{
            								"grd_Pop_week" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							}
            						]
            					},
            					"DatePickerControl" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"cell" :
            			{
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            												"color" : nexacro.ColorObject("#333333"),
            												"border" : nexacro.BorderObject("1px solid #ebeef5"),
            												"padding" : nexacro.PaddingObject("1px 4px")
            											},
            											"disabled" :
            											{
            												"color" : nexacro.ColorObject("#999999")
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_Pop_week" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            															"color" : nexacro.ColorObject("#666666"),
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("0px")
            														},
            														"disabled" :
            														{
            															"color" : nexacro.ColorObject("#666666")
            														}
            													}
            												}
            											},
            											{
            												"grd_TFDM_user" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#ffffff"),
            															"border" : nexacro.BorderObject("0px none"),
            															"font" : nexacro.FontObject("normal 700 14px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"body" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#555555"),
            												"border" : nexacro.BorderObject("1px solid #ebeef5"),
            												"padding" : nexacro.PaddingObject("1px 4px")
            											},
            											"mouseover" :
            											{
            											},
            											"selected" :
            											{
            												"color" : nexacro.ColorObject("#000000")
            											},
            											"disabled" :
            											{
            												"color" : nexacro.ColorObject("#999999")
            											},
            											"disabled_selected" :
            											{
            											},
            											"blinked" :
            											{
            												"color" : nexacro.ColorObject("#000000")
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_Pop_week" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#666666"),
            															"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("0px")
            														},
            														"mouseover" :
            														{
            															"border" : nexacro.BorderObject("0px none")
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"color" : nexacro.ColorObject("#ffffff")
            														},
            														"disabled" :
            														{
            															"color" : nexacro.ColorObject("#959595")
            														}
            													}
            												}
            											},
            											{
            												"grd_subMenu" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("0px")
            														},
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														},
            														"disabled" :
            														{
            															"color" : nexacro.ColorObject("#999999")
            														},
            														"disabled_selected" :
            														{
            														}
            													}
            												}
            											},
            											{
            												"grd_LF_searchResult" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#777777"),
            															"border" : nexacro.BorderObject("0px none"),
            															"padding" : nexacro.PaddingObject("3px 9px 4px 9px")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#000000")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#000000")
            														},
            														"disabled" :
            														{
            															"color" : nexacro.ColorObject("#999999")
            														},
            														"disabled_selected" :
            														{
            															"color" : nexacro.ColorObject("#999999")
            														}
            													}
            												}
            											},
            											{
            												"grd_TF_openList" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#555555"),
            															"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            															"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff"),
            															"padding" : nexacro.PaddingObject("1px 0px")
            														},
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#0ca950")
            														},
            														"disabled" :
            														{
            															"color" : nexacro.ColorObject("#999999")
            														},
            														"disabled_selected" :
            														{
            														}
            													}
            												}
            											},
            											{
            												"grd_TFDM_user" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("transparent"),
            															"border" : nexacro.BorderObject("0px none")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("transparent"),
            															"border" : nexacro.BorderObject("0px none"),
            															"font" : nexacro.FontObject("normal 700 11px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            														},
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("transparent"),
            															"border" : nexacro.BorderObject("0px none"),
            															"font" : nexacro.FontObject("normal 700 11px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            														},
            														"disabled" :
            														{
            															"color" : nexacro.ColorObject("transparent")
            														}
            													}
            												}
            											},
            											{
            												"grd_POP_notice" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none,0px none,1px solid #ebedf0"),
            															"padding" : nexacro.PaddingObject("1px 0px"),
            															"color" : nexacro.ColorObject("#909399"),
            															"font" : nexacro.FontObject("normal 400 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            														},
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            															"border" : nexacro.BorderObject("0px none,0px none,1px solid #ebedf0"),
            															"color" : nexacro.ColorObject("#909399")
            														},
            														"disabled" :
            														{
            															"color" : nexacro.ColorObject("#909399")
            														},
            														"disabled_selected" :
            														{
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"summary" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"font" : nexacro.FontObject("normal 700 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            												"color" : nexacro.ColorObject("#333333"),
            												"border" : nexacro.BorderObject("1px solid #f1d49a"),
            												"padding" : nexacro.PaddingObject("1px 4px")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				},
            				"class" :
            				[
            					{
            						"Expr_Case_SubSum" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#333333")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"goalplus" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#0000ff")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"goalminus" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#ff0000")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_sunday" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_Pop_week" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#ff6a6a")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										},
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_Pop_week" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#ff6a6a")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#ff6a6a")
            																	},
            																	"focused" :
            																	{
            																		"color" : nexacro.ColorObject("#ff6a6a")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ff6a6a")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							},
            							"class" :
            							[
            								{
            									"subcell" :
            									{
            										"parent" :
            										{
            											"row" :
            											{
            												"parent" :
            												{
            													"body" :
            													{
            														"parent" :
            														{
            															"Grid" :
            															{
            																"class" :
            																[
            																	{
            																		"grd_Pop_week" :
            																		{
            																			"self" :
            																			{
            																				"enabled" :
            																				{
            																					"color" : nexacro.ColorObject("#ff6a6a")
            																				},
            																				"mouseover" :
            																				{
            																					"color" : nexacro.ColorObject("#ff6a6a")
            																				},
            																				"focused" :
            																				{
            																					"color" : nexacro.ColorObject("#ff6a6a")
            																				},
            																				"selected" :
            																				{
            																					"color" : nexacro.ColorObject("#ff6a6a")
            																				}
            																			}
            																		}
            																	}
            																]
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							]
            						}
            					},
            					{
            						"cell_saturday" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_Pop_week" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#2798d7")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										},
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_Pop_week" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#2798d7")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#2798d7")
            																	},
            																	"focused" :
            																	{
            																		"color" : nexacro.ColorObject("#2798d7")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#2798d7")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							},
            							"class" :
            							[
            								{
            									"subcell" :
            									{
            										"parent" :
            										{
            											"row" :
            											{
            												"parent" :
            												{
            													"body" :
            													{
            														"parent" :
            														{
            															"Grid" :
            															{
            																"class" :
            																[
            																	{
            																		"grd_Pop_week" :
            																		{
            																			"self" :
            																			{
            																				"enabled" :
            																				{
            																					"color" : nexacro.ColorObject("#2798d7")
            																				},
            																				"mouseover" :
            																				{
            																					"color" : nexacro.ColorObject("#2798d7")
            																				},
            																				"focused" :
            																				{
            																					"color" : nexacro.ColorObject("#2798d7")
            																				},
            																				"selected" :
            																				{
            																					"color" : nexacro.ColorObject("#2798d7")
            																				}
            																			}
            																		}
            																	}
            																]
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							]
            						}
            					},
            					{
            						"cell_trailingday" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_Pop_week" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#959595")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										},
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_Pop_week" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#959595")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#959595")
            																	},
            																	"focused" :
            																	{
            																		"color" : nexacro.ColorObject("#959595")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#959595")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							},
            							"class" :
            							[
            								{
            									"subcell" :
            									{
            										"parent" :
            										{
            											"row" :
            											{
            												"parent" :
            												{
            													"body" :
            													{
            														"parent" :
            														{
            															"Grid" :
            															{
            																"class" :
            																[
            																	{
            																		"grd_Pop_week" :
            																		{
            																			"self" :
            																			{
            																				"enabled" :
            																				{
            																					"color" : nexacro.ColorObject("#959595")
            																				},
            																				"mouseover" :
            																				{
            																					"color" : nexacro.ColorObject("#959595")
            																				},
            																				"focused" :
            																				{
            																					"color" : nexacro.ColorObject("#959595")
            																				},
            																				"selected" :
            																				{
            																					"color" : nexacro.ColorObject("#959595")
            																				}
            																			}
            																		}
            																	}
            																]
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							]
            						}
            					},
            					{
            						"cell_today" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_Pop_week" :
            															{
            																"self" :
            																{
            																	"mouseover" :
            																	{
            																	},
            																	"focused" :
            																	{
            																	},
            																	"selected" :
            																	{
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							},
            							"class" :
            							[
            								{
            									"subcell" :
            									{
            										"parent" :
            										{
            											"row" :
            											{
            												"parent" :
            												{
            													"body" :
            													{
            														"parent" :
            														{
            															"Grid" :
            															{
            																"class" :
            																[
            																	{
            																		"grd_Pop_week" :
            																		{
            																			"self" :
            																			{
            																				"mouseover" :
            																				{
            																				},
            																				"focused" :
            																				{
            																				},
            																				"selected" :
            																				{
            																				}
            																			}
            																		}
            																	}
            																]
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							]
            						}
            					},
            					{
            						"lev0" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_subMenu" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"padding" : nexacro.PaddingObject("10px 10px 10px 16px"),
            																		"color" : nexacro.ColorObject("#333333"),
            																		"font" : nexacro.FontObject("normal 500 15px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"focused" :
            																	{
            																		"color" : nexacro.ColorObject("#333333")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#333333")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lev0_S" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_subMenu" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"padding" : nexacro.PaddingObject("10px 10px 10px 16px"),
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"font" : nexacro.FontObject("normal 500 15px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"focused" :
            																	{
            																		"padding" : nexacro.PaddingObject("10px 10px 10px 16px"),
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"font" : nexacro.FontObject("normal 500 15px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"mouseover" :
            																	{
            																		"padding" : nexacro.PaddingObject("10px 10px 10px 16px"),
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"font" : nexacro.FontObject("normal 500 15px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"selected" :
            																	{
            																		"padding" : nexacro.PaddingObject("10px 10px 10px 16px"),
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"font" : nexacro.FontObject("normal 500 15px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lev1" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_subMenu" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"padding" : nexacro.PaddingObject("8px 10px 8px 16px"),
            																		"color" : nexacro.ColorObject("#0ca950"),
            																		"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"focused" :
            																	{
            																		"color" : nexacro.ColorObject("#0ca950")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#0ca950")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#0ca950")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lev1_S" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_subMenu" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"padding" : nexacro.PaddingObject("8px 10px 8px 16px"),
            																		"color" : nexacro.ColorObject("#0ca950"),
            																		"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"focused" :
            																	{
            																		"padding" : nexacro.PaddingObject("8px 10px 8px 16px"),
            																		"color" : nexacro.ColorObject("#0ca950"),
            																		"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"mouseover" :
            																	{
            																		"padding" : nexacro.PaddingObject("8px 10px 8px 16px"),
            																		"color" : nexacro.ColorObject("#0ca950"),
            																		"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"selected" :
            																	{
            																		"padding" : nexacro.PaddingObject("8px 10px 8px 16px"),
            																		"color" : nexacro.ColorObject("#0ca950"),
            																		"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lev2" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_subMenu" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"padding" : nexacro.PaddingObject("6px 10px 6px 26px"),
            																		"color" : nexacro.ColorObject("#777777"),
            																		"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"focused" :
            																	{
            																		"color" : nexacro.ColorObject("#000000")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#000000")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#000000")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lev2_S" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_subMenu" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"padding" : nexacro.PaddingObject("6px 10px 6px 26px"),
            																		"color" : nexacro.ColorObject("#000000"),
            																		"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"focused" :
            																	{
            																		"padding" : nexacro.PaddingObject("6px 10px 6px 26px"),
            																		"color" : nexacro.ColorObject("#000000"),
            																		"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"mouseover" :
            																	{
            																		"padding" : nexacro.PaddingObject("6px 10px 6px 26px"),
            																		"color" : nexacro.ColorObject("#000000"),
            																		"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"selected" :
            																	{
            																		"padding" : nexacro.PaddingObject("6px 10px 6px 26px"),
            																		"color" : nexacro.ColorObject("#000000"),
            																		"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"reject" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_searchResult" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#ff0000"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#ff0000"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ff0000"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lv0" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_searchResult" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lv1" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_searchResult" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lv2" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_searchResult" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lv3" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_searchResult" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lv4" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_searchResult" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lv5" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_searchResult" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lv6" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_searchResult" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lv7" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_searchResult" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lv8" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_searchResult" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lv9" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_LF_searchResult" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff"),
            																		"border" : nexacro.BorderObject("0px none"),
            																		"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_padding_left10" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"head" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_TF_openList" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										},
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_TF_openList" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            																	},
            																	"mouseover" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            																	},
            																	"focused" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            																	},
            																	"selected" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										},
            										"summary" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_TF_openList" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"grd_MF_bottom" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_TFDM_user" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("transparent"),
            																		"border" : nexacro.BorderObject("0px none,0px none,1px solid #dbdee2,0px none")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("transparent"),
            																		"border" : nexacro.BorderObject("0px none,0px none,1px solid #313340,0px none")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("transparent"),
            																		"border" : nexacro.BorderObject("0px none,0px none,1px solid #313340,0px none")
            																	},
            																	"disabled" :
            																	{
            																		"color" : nexacro.ColorObject("transparent"),
            																		"border" : nexacro.BorderObject("0px none,0px none,1px solid #313340,0px none")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"grd_MF_left" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_TFDM_user" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("transparent"),
            																		"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #dbdee2")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("transparent"),
            																		"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #313340")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("transparent"),
            																		"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #313340")
            																	},
            																	"disabled" :
            																	{
            																		"color" : nexacro.ColorObject("transparent"),
            																		"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #313340")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"grd_MF_right" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_TFDM_user" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("transparent"),
            																		"border" : nexacro.BorderObject("0px none,1px solid #dbdee2,0px none,0px none")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("transparent"),
            																		"border" : nexacro.BorderObject("0px none,1px solid #313340,0px none,0px none")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("transparent"),
            																		"border" : nexacro.BorderObject("0px none,1px solid #313340,0px none,0px none")
            																	},
            																	"disabled" :
            																	{
            																		"color" : nexacro.ColorObject("transparent"),
            																		"border" : nexacro.BorderObject("0px none,1px solid #313340,0px none,0px none")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"grd_MF_top" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_TFDM_user" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("transparent"),
            																		"border" : nexacro.BorderObject("1px solid #dbdee2,0px none,0px none,0px none")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("transparent"),
            																		"border" : nexacro.BorderObject("1px solid #313340,0px none,0px none,0px none")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("transparent"),
            																		"border" : nexacro.BorderObject("1px solid #313340,0px none,0px none,0px none")
            																	},
            																	"disabled" :
            																	{
            																		"color" : nexacro.ColorObject("transparent"),
            																		"border" : nexacro.BorderObject("1px solid #313340,0px none,0px none,0px none")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"grd_MF_edit" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_TFDM_user" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#999999"),
            																		"border" : nexacro.BorderObject("1px solid #dbdee2"),
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#999999"),
            																		"border" : nexacro.BorderObject("1px solid #313340"),
            																		"font" : nexacro.FontObject("normal 700 11px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\""),
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#999999"),
            																		"border" : nexacro.BorderObject("1px solid #313340"),
            																		"font" : nexacro.FontObject("normal 700 11px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\""),
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            																	},
            																	"disabled" :
            																	{
            																		"color" : nexacro.ColorObject("#999999"),
            																		"border" : nexacro.BorderObject("1px solid #313340"),
            																		"font" : nexacro.FontObject("normal 700 11px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\""),
            																		"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_newNoticeBG" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_POP_notice" :
            															{
            																"self" :
            																{
            																	"mouseover" :
            																	{
            																	},
            																	"selected" :
            																	{
            																	},
            																	"disabled" :
            																	{
            																	},
            																	"disabled_selected" :
            																	{
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_newNoticeBG2" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_POP_notice" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff,0px none")
            																	},
            																	"mouseover" :
            																	{
            																		"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff,0px none")
            																	},
            																	"selected" :
            																	{
            																		"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff,0px none")
            																	},
            																	"disabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff,0px none")
            																	},
            																	"disabled_selected" :
            																	{
            																		"border" : nexacro.BorderObject("0px none,0px none,1px solid #ffffff,0px none")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_date" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_POP_notice" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#909399"),
            																		"font" : nexacro.FontObject("normal 500 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#909399"),
            																		"font" : nexacro.FontObject("normal 500 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#909399"),
            																		"font" : nexacro.FontObject("normal 500 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"disabled" :
            																	{
            																		"color" : nexacro.ColorObject("#909399"),
            																		"font" : nexacro.FontObject("normal 500 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"disabled_selected" :
            																	{
            																		"color" : nexacro.ColorObject("#909399"),
            																		"font" : nexacro.FontObject("normal 500 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_titleLink" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"class" :
            													[
            														{
            															"grd_POP_notice" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#222222"),
            																		"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#222222"),
            																		"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"disabled" :
            																	{
            																		"color" : nexacro.ColorObject("#222222"),
            																		"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"disabled_selected" :
            																	{
            																		"color" : nexacro.ColorObject("#222222"),
            																		"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#222222"),
            																		"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				]
            			},
            			"subcell" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"color" : nexacro.ColorObject("#555555"),
            														"border" : nexacro.BorderObject("1px solid #ebeef5"),
            														"padding" : nexacro.PaddingObject("1px 4px")
            													},
            													"mouseover" :
            													{
            													},
            													"disabled" :
            													{
            														"color" : nexacro.ColorObject("#999999")
            													},
            													"selected" :
            													{
            														"color" : nexacro.ColorObject("#000000")
            													},
            													"blinked" :
            													{
            														"color" : nexacro.ColorObject("#000000")
            													}
            												},
            												"class" :
            												[
            													{
            														"grd_Pop_week" :
            														{
            															"self" :
            															{
            																"enabled" :
            																{
            																	"color" : nexacro.ColorObject("#666666"),
            																	"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            																	"border" : nexacro.BorderObject("0px none"),
            																	"padding" : nexacro.PaddingObject("0px")
            																},
            																"mouseover" :
            																{
            																	"border" : nexacro.BorderObject("0px none")
            																},
            																"disabled" :
            																{
            																	"color" : nexacro.ColorObject("#8b8b8b")
            																},
            																"selected" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff")
            																},
            																"blinked" :
            																{
            																	"color" : nexacro.ColorObject("#ffffff")
            																}
            															}
            														}
            													}
            												]
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"selection" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("2px solid #0ca950")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"summary" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f1d49a, 0px none, 0px none, 0px none")
            							}
            						}
            					}
            				}
            			},
            			"hscrollbar" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						},
            						"class" :
            						[
            							{
            								"grd_subMenu" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							},
            							{
            								"grd_LF_searchResult" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							},
            							{
            								"grd_TF_openList" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							},
            							{
            								"grd_TFDM_user" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #b1b1b1, 0px none, 0px none, 0px none")
            										}
            									}
            								}
            							},
            							{
            								"grd_POP_notice" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"vscrollbar" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						},
            						"class" :
            						[
            							{
            								"grd_subMenu" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							},
            							{
            								"grd_LF_searchResult" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							},
            							{
            								"grd_TF_openList" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							},
            							{
            								"grd_TFDM_user" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #b1b1b1")
            										}
            									}
            								}
            							},
            							{
            								"grd_POP_notice" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"cellbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            								"padding" : nexacro.PaddingObject("0px 9px")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            								"padding" : nexacro.PaddingObject("0px 9px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #707070"),
            								"color" : nexacro.ColorObject("#262626")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #707070"),
            								"color" : nexacro.ColorObject("#262626")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #afafaf"),
            								"color" : nexacro.ColorObject("#000000")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#c4c4c4"),
            								"border" : nexacro.BorderObject("1px solid #ededed")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            								"color" : nexacro.ColorObject("#555555"),
            								"border" : nexacro.BorderObject("1px solid #c2c2c2")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #a0a0a0")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #a0a0a0")
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#bbbbbb"),
            								"border" : nexacro.BorderObject("1px solid #d9d9d9")
            							}
            						}
            					}
            				}
            			},
            			"cellcalendar" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            							}
            						}
            					}
            				}
            			},
            			"cellcheckbox" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            							}
            						}
            					}
            				}
            			},
            			"cellcombo" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            							}
            						}
            					}
            				}
            			},
            			"celledit" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0ca950")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0ca950")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0ca950")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0ca950")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"cellimage" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px")
            							}
            						}
            					},
            					"cell" :
            					{
            						"class" :
            						[
            							{
            								"cell_POP_icon" :
            								{
            									"parent" :
            									{
            										"row" :
            										{
            											"parent" :
            											{
            												"body" :
            												{
            													"parent" :
            													{
            														"Grid" :
            														{
            															"class" :
            															[
            																{
            																	"grd_POP_notice" :
            																	{
            																		"self" :
            																		{
            																			"enabled" :
            																			{
            																				"border" : nexacro.BorderObject("0px none")
            																			}
            																		}
            																	}
            																}
            															]
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"cellexpandbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/grd_expand.png')")
            							}
            						}
            					}
            				}
            			},
            			"cellselection" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px dotted #909090")
            							}
            						}
            					}
            				}
            			},
            			"cellradioitem" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_N.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_S.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_N.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_D.png')")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_DS.png')")
            							}
            						}
            					}
            				}
            			},
            			"cellmaskedit" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0ca950")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0ca950")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0ca950")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0ca950")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"cellprogressbar" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 11px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            							}
            						}
            					}
            				}
            			},
            			"celltextarea" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            							}
            						}
            					}
            				}
            			},
            			"treeitembutton" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/treeOpen.png')")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/treeClose.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemimage" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/grd_treeItem_N.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/grd_treeCloseImg.png')")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/grd_treeOpenImg.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"celltreeline" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px dotted #cccccc")
            							}
            						}
            					}
            				}
            			},
            			"groupboxcontents" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #ededed")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"groupboxtitle" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 500 15px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"ImageViewer" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none #cccccc")
            					},
            					"disabled" :
            					{
            					}
            				},
            				"class" :
            				[
            					{
            						"img_TF_user" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"img_alert_icon" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            								}
            							}
            						}
            					},
            					{
            						"img_POP_user" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"img_POP_photo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"img_POP_photoBack" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"imagetext" :
            			{
            				"parent" :
            				{
            					"ImageViewer" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						},
            						"class" :
            						[
            							{
            								"img_TF_user" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"font" : nexacro.FontObject("normal 400 16px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            											"color" : nexacro.ColorObject("#ffffff")
            										},
            										"disabled" :
            										{
            											"color" : nexacro.ColorObject("#ffffff")
            										}
            									}
            								}
            							},
            							{
            								"img_POP_user" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"font" : nexacro.FontObject("normal 400 32px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            											"color" : nexacro.ColorObject("#ffffff")
            										},
            										"disabled" :
            										{
            											"color" : nexacro.ColorObject("#ffffff")
            										}
            									}
            								}
            							},
            							{
            								"img_POP_photo" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"font" : nexacro.FontObject("normal 400 32px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            											"color" : nexacro.ColorObject("#ffffff")
            										},
            										"disabled" :
            										{
            											"color" : nexacro.ColorObject("#ffffff")
            										}
            									}
            								}
            							},
            							{
            								"img_POP_photoBack" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"font" : nexacro.FontObject("normal 400 32px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            											"color" : nexacro.ColorObject("#ffffff")
            										},
            										"disabled" :
            										{
            											"color" : nexacro.ColorObject("#ffffff")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"padding" : nexacro.PaddingObject("4px 0px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					}
            				}
            			},
            			"ListBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"padding" : nexacro.PaddingObject("4px 0px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#222222"),
            								"padding" : nexacro.PaddingObject("3px 9px 4px 9px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"mouseover_selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							},
            							"disabled_selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					},
            					"ListBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#222222"),
            								"padding" : nexacro.PaddingObject("3px 9px 4px 9px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"mouseover_selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							},
            							"disabled_selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					},
            					"combolist" :
            					{
            						"parent" :
            						{
            							"cellcombo" :
            							{
            								"parent" :
            								{
            									"ListViewCellControl" :
            									{
            										"self" :
            										{
            											"mouseover" :
            											{
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Menu" :
            			{
            				"self" :
            				{
            					"disabled" :
            					{
            					}
            				}
            			},
            			"prevbutton" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/menu_prev_N.png')"),
            								"padding" : nexacro.PaddingObject("0px 12px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/menu_prev_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/menu_prev_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/menu_prev_D.png')")
            							}
            						}
            					},
            					"menupopupmenu" :
            					{
            						"parent" :
            						{
            							"Menu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/menu_prev_N.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/menu_prev_O.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/menu_prev_D.png')")
            									}
            								}
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/pmenu_prev_N.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/pmenu_prev_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/pmenu_prev_D.png')")
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/pmenu_prev_N.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/pmenu_prev_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/pmenu_prev_D.png')")
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("11px 10px 11px 8px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/tab_prev_N.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/tab_prev_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/tab_prev_D.png')")
            							}
            						},
            						"class" :
            						[
            							{
            								"tab_TF_screen" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"padding" : nexacro.PaddingObject("15px 15px 13px 16px"),
            											"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_prev_N.png')")
            										},
            										"mouseover" :
            										{
            											"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_prev_O.png')")
            										},
            										"disabled" :
            										{
            											"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_prev_D.png')")
            										}
            									}
            								}
            							}
            						]
            					},
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px"),
            										"icon" : nexacro.UrlObject("URL('theme://images/cal_prev_N.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/cal_prev_O.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/cal_prev_O.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/cal_prev_D.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"nextbutton" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 12px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/menu_next_N.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/menu_next_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/menu_next_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/menu_next_D.png')")
            							}
            						}
            					},
            					"menupopupmenu" :
            					{
            						"parent" :
            						{
            							"Menu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/menu_next_N.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/menu_next_O.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/menu_next_D.png')")
            									}
            								}
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/pmenu_next_N.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/pmenu_next_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/pmenu_next_D.png')")
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/pmenu_next_N.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/pmenu_next_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/pmenu_next_D.png')")
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("11px 10px 11px 10px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/tab_next_N.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/tab_next_O.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/tab_next_D.png')")
            							}
            						},
            						"class" :
            						[
            							{
            								"tab_TF_screen" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"padding" : nexacro.PaddingObject("15px 15px 13px 16px"),
            											"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_next_N.png')")
            										},
            										"mouseover" :
            										{
            											"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_next_O.png')")
            										},
            										"disabled" :
            										{
            											"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_next_D.png')")
            										}
            									}
            								}
            							}
            						]
            					},
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px"),
            										"icon" : nexacro.UrlObject("URL('theme://images/cal_next_N.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/cal_next_O.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/cal_next_O.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/cal_next_D.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"menuitem" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 500 15px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            								"color" : nexacro.ColorObject("#cccccc"),
            								"padding" : nexacro.PaddingObject("0px 20px 0px 20px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#6b6d6f")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							}
            						}
            					}
            				}
            			},
            			"menupopupmenu" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            								"color" : nexacro.ColorObject("#555555"),
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"padding" : nexacro.PaddingObject("0px 0px 4px")
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitem" :
            			{
            				"parent" :
            				{
            					"menupopupmenu" :
            					{
            						"parent" :
            						{
            							"Menu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#555555"),
            										"border" : nexacro.BorderObject("0px none"),
            										"padding" : nexacro.PaddingObject("5px 9px 6px 9px")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#000000")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#000000")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#000000")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#999999")
            									}
            								}
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#555555"),
            								"padding" : nexacro.PaddingObject("5px 9px 6px 9px")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#000000")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#000000")
            							},
            							"focused" :
            							{
            								"color" : nexacro.ColorObject("#000000")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#555555"),
            								"padding" : nexacro.PaddingObject("5px 9px 6px 9px")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#000000")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#000000")
            							},
            							"focused" :
            							{
            								"color" : nexacro.ColorObject("#000000")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemtext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"menupopupmenu" :
            							{
            								"parent" :
            								{
            									"Menu" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#555555"),
            												"padding" : nexacro.PaddingObject("0px 20px 0px 0px")
            											},
            											"mouseover" :
            											{
            												"color" : nexacro.ColorObject("#000000")
            											},
            											"disabled" :
            											{
            												"color" : nexacro.ColorObject("#999999")
            											}
            										}
            									}
            								}
            							},
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("2px 10px 1px 4px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("2px 10px 1px 4px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemhotkeytext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"menupopupmenu" :
            							{
            								"parent" :
            								{
            									"Menu" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#9d9d9d"),
            												"padding" : nexacro.PaddingObject("0px 7px 0px 0px")
            											},
            											"mouseover" :
            											{
            												"color" : nexacro.ColorObject("#9d9d9d")
            											},
            											"disabled" :
            											{
            												"color" : nexacro.ColorObject("#c4c4c4")
            											}
            										}
            									}
            								}
            							},
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#9d9d9d"),
            										"padding" : nexacro.PaddingObject("0px 7px 0px 0px")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#c4c4c4")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#9d9d9d"),
            										"padding" : nexacro.PaddingObject("0px 7px 0px 0px")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#c4c4c4")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemexpandimage" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"menupopupmenu" :
            							{
            								"parent" :
            								{
            									"Menu" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/popupMenu_expand_N.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/popupMenu_expand_D.png')")
            											}
            										}
            									}
            								}
            							},
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/popupMenu_expand_N.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/popupMenu_expand_D.png')")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/popupMenu_expand_N.png')")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/popupMenu_expand_D.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Plugin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					}
            				}
            			},
            			"PluginControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					}
            				}
            			},
            			"PopupMenu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            						"color" : nexacro.ColorObject("#555555"),
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"padding" : nexacro.PaddingObject("0px 0px 4px")
            					}
            				}
            			},
            			"PopupMenuControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            						"color" : nexacro.ColorObject("#555555"),
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"padding" : nexacro.PaddingObject("0px 0px 4px")
            					}
            				}
            			},
            			"popupmenuitemcheckbox" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"mouseover" :
            									{
            									},
            									"disabled" :
            									{
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"mouseover" :
            									{
            									},
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"ProgressBar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					}
            				}
            			},
            			"ProgressBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					}
            				}
            			},
            			"progressbaritem" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"progressbartext" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff"),
            								"padding" : nexacro.PaddingObject("0px 8px"),
            								"font" : nexacro.FontObject("normal 400 11px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff"),
            								"padding" : nexacro.PaddingObject("0px 8px"),
            								"font" : nexacro.FontObject("normal 400 11px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff"),
            								"padding" : nexacro.PaddingObject("0px 8px"),
            								"font" : nexacro.FontObject("normal 400 11px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff"),
            								"padding" : nexacro.PaddingObject("0px 8px"),
            								"font" : nexacro.FontObject("normal 400 11px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            							}
            						}
            					}
            				}
            			},
            			"Radio" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
            					}
            				}
            			},
            			"radioitem" :
            			{
            				"parent" :
            				{
            					"Radio" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_N.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 20px 0px 7px")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_S.png')"),
            								"color" : nexacro.ColorObject("#0ca950")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_N.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_D.png')"),
            								"color" : nexacro.ColorObject("#999999")
            							},
            							"readonly" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_D.png')"),
            								"color" : nexacro.ColorObject("#555555")
            							},
            							"readonly_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_DS.png')"),
            								"color" : nexacro.ColorObject("#555555")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/rdo_DS.png')"),
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"RadioItemControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/rdo_N.png')"),
            						"textPadding" : nexacro.PaddingObject("0px 20px 0px 7px")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/rdo_S.png')")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/rdo_N.png')")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/rdo_D.png')")
            					},
            					"readonly" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/rdo_D.png')")
            					},
            					"readonly_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/rdo_RS.png')")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL('theme://images/rdo_DS.png')")
            					}
            				}
            			},
            			"Sketch" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"spinedit" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 2px 0px 9px")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"font" : nexacro.FontObject("normal 500 15px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            												"color" : nexacro.ColorObject("#333333"),
            												"padding" : nexacro.PaddingObject("0px 4px")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"font" : nexacro.FontObject("normal 500 15px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            												"color" : nexacro.ColorObject("#333333"),
            												"padding" : nexacro.PaddingObject("0px 4px")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spinupbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 0px 0px 0px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_upN.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_upO.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_upO.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_upD.png')")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            												"icon" : nexacro.UrlObject("URL('theme://images/spin_upN.png')")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/spin_upO.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/spin_upO.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/spin_upD.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("2px 0px 0px 0px"),
            												"icon" : nexacro.UrlObject("URL('theme://images/spin_upN.png')")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/spin_upO.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/spin_upO.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/spin_upD.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spindownbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 2px 0px"),
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_downN.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_downO.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_downO.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/spin_downD.png')")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 0px 2px 0px"),
            												"icon" : nexacro.UrlObject("URL('theme://images/spin_downN.png')")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/spin_downO.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/spin_downO.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/spin_downD.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"padding" : nexacro.PaddingObject("0px 0px 2px 0px"),
            												"icon" : nexacro.UrlObject("URL('theme://images/spin_downN.png')")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/spin_downO.png')")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/spin_downO.png')")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL('theme://images/spin_downD.png')")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Static" :
            			{
            				"self" :
            				{
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				},
            				"class" :
            				[
            					{
            						"sta_WF_SchLabel2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px 0px 28px"),
            									"font" : nexacro.FontObject("bold 13px \"noto\",\"Malgun Gothic\",\"Arial\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px"),
            									"color" : nexacro.ColorObject("#0E3B85")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_divLine_top" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,1px solid #dddedf")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_divLine_bottom" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #dddedf,0px none,0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 500 18px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 24px")
            								}
            							}
            						}
            					},
            					{
            						"sta_meet_item" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8796A7"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("normal 500 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_meet_item_O" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #8796A7"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 500 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_meet_itemtitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("bold 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_meet_itemtitle_O" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_meet_itemdate" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_meet_itemdate_O" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_calHead_green" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 700 17px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_calHead" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("normal 700 16px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_doctitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 16px 0px 19px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 500 16px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_docsubTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none,0px none,0px none,8px solid transparent"),
            									"padding" : nexacro.PaddingObject("0px 16px 0px 10px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 500 15px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_LF_divline" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #5b605a,0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_subMenuTop_view" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("url('imagerc::left/bg_subMenu_show.png') 90px 0px")
            								}
            							}
            						}
            					},
            					{
            						"sta_subMenuTop_title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid transparent,0px none,1px solid #e6e6e6"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal 700 16px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_subMenuBottom_view" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("url('imagerc::left/bg_menuDown_view.png') 22px 22px")
            								}
            							}
            						}
            					},
            					{
            						"sta_TF_systemName" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 700 22px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            									"color" : nexacro.ColorObject("#909399")
            								}
            							}
            						}
            					},
            					{
            						"sta_TF_counter" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 5px"),
            									"font" : nexacro.FontObject("normal 400 10px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"sta_login_sysName" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#0ca950"),
            									"font" : nexacro.FontObject("normal 500 60px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_login_guide" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal 400 12px/1.6 \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_login_copyright" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#b9beb8"),
            									"font" : nexacro.FontObject("normal 300 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_login_help" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#909399"),
            									"font" : nexacro.FontObject("normal 400 13px/1.5 \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_TFDM_User" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal bold 700 12px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_TFDM_Group" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal bold 700 12px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_TFDM_Company" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("normal bold 700 12px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_TFDM_Black" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("normal bold 12px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"sta_TFDM_Step" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#6C789C"),
            									"font" : nexacro.FontObject("normal 700 12px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"sta_TFDM_IntroTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#566795"),
            									"font" : nexacro.FontObject("normal bold 12px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"sta_TFDM_IntroSubTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#000000"),
            									"font" : nexacro.FontObject("normal 12px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"sta_TFDM_StepNext" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#5271C1"),
            									"font" : nexacro.FontObject("normal 700 18px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_TFDM_StepD" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#B3BCD4"),
            									"font" : nexacro.FontObject("normal 700 12px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"sta_TFDM_StepTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#5271C1"),
            									"font" : nexacro.FontObject("normal bold 18px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"sta_TFDM_StepTitleD" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#B3BCD4"),
            									"font" : nexacro.FontObject("normal bold 14px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            								}
            							}
            						}
            					},
            					{
            						"sta_TFDM_SchLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 10px 0px 28px"),
            									"font" : nexacro.FontObject("normal 700 12px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\""),
            									"letterSpacing" : nexacro.CSSValueObject("-1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_TFDM_Title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"padding" : nexacro.PaddingObject("0px 0px 10px 16px"),
            									"font" : nexacro.FontObject("bold 14px/normal \"noto\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_alert_circle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ffe897")
            								}
            							}
            						}
            					},
            					{
            						"sta_alert_lineH" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e0e0e0, 0px none, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_alert_lineV" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #e0e0e0")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_label" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 400 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            									"color" : nexacro.ColorObject("#333333")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_help" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#555555"),
            									"font" : nexacro.FontObject("normal 400 13px/1.5 \"noto\",\"Malgun Gothic\",\"Arial\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_POP_groupTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            									"color" : nexacro.ColorObject("#333333")
            								}
            							}
            						}
            					}
            				]
            			},
            			"StaticControl" :
            			{
            				"self" :
            				{
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"tabpage" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid #ebeef5, 0px none, 0px none, 0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("2px solid #ebeef5, 0px none, 0px none, 0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("2px solid #ebeef5, 0px none, 0px none, 0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid #ebeef5, 0px none, 0px none, 0px none")
            							}
            						},
            						"class" :
            						[
            							{
            								"tab_TF_screen" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							},
            							{
            								"tab_POP_notice" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #dddedf, 0px none, 0px none, 0px none")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"tabbuttonitem" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#555555"),
            								"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            								"border" : nexacro.BorderObject("2px solid #ffffff,0px none,2px solid #ebeef5"),
            								"padding" : nexacro.PaddingObject("6px 14px 6px 16px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#08a44d")
            							},
            							"focused" :
            							{
            								"color" : nexacro.ColorObject("#08a44d")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#08a44d"),
            								"border" : nexacro.BorderObject("2px solid #ffffff,0px none,2px solid #08a44d")
            							},
            							"focused_selected" :
            							{
            								"color" : nexacro.ColorObject("#08a44d"),
            								"border" : nexacro.BorderObject("2px solid #ffffff,0px none,2px solid #08a44d")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							},
            							"disabled_selected" :
            							{
            								"border" : nexacro.BorderObject("2px solid #ffffff,0px none,2px solid #c7c9cc"),
            								"color" : nexacro.ColorObject("#777777"),
            								"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            							}
            						},
            						"class" :
            						[
            							{
            								"tab_TF_screen" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 16px 0px 24px"),
            											"color" : nexacro.ColorObject("#444444"),
            											"font" : nexacro.FontObject("normal 500 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 16px 0px 24px"),
            											"color" : nexacro.ColorObject("#000000")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 16px 0px 24px"),
            											"color" : nexacro.ColorObject("#000000")
            										},
            										"selected" :
            										{
            											"padding" : nexacro.PaddingObject("0px 14px 0px 22px"),
            											"border" : nexacro.BorderObject("2px solid #1ab85a"),
            											"color" : nexacro.ColorObject("#000000")
            										},
            										"focused_selected" :
            										{
            											"padding" : nexacro.PaddingObject("0px 14px 0px 22px"),
            											"border" : nexacro.BorderObject("2px solid #1ab85a"),
            											"color" : nexacro.ColorObject("#000000")
            										},
            										"disabled" :
            										{
            											"color" : nexacro.ColorObject("#999999")
            										},
            										"disabled_selected" :
            										{
            											"border" : nexacro.BorderObject("2px solid #1ab85a"),
            											"padding" : nexacro.PaddingObject("0px 14px 0px 22px"),
            											"color" : nexacro.ColorObject("#000000")
            										}
            									}
            								}
            							},
            							{
            								"tab_POP_notice" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"color" : nexacro.ColorObject("#777777"),
            											"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            											"border" : nexacro.BorderObject("1px solid transparent,0px none,1px solid #dddedf"),
            											"padding" : nexacro.PaddingObject("5px 12px 5px 12px")
            										},
            										"mouseover" :
            										{
            											"color" : nexacro.ColorObject("#0ca950")
            										},
            										"focused" :
            										{
            											"color" : nexacro.ColorObject("#0ca950")
            										},
            										"selected" :
            										{
            											"color" : nexacro.ColorObject("#0ca950"),
            											"border" : nexacro.BorderObject("2px solid transparent,0px none,2px solid #0ca950"),
            											"padding" : nexacro.PaddingObject("4px 12px 4px 12px")
            										},
            										"focused_selected" :
            										{
            											"color" : nexacro.ColorObject("#0ca950"),
            											"border" : nexacro.BorderObject("2px solid transparent,0px none,2px solid #0ca950"),
            											"padding" : nexacro.PaddingObject("4px 12px 4px 12px")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid transparent,0px none,1px solid #dddedf"),
            											"color" : nexacro.ColorObject("#999999")
            										},
            										"disabled_selected" :
            										{
            											"border" : nexacro.BorderObject("2px solid transparent,0px none,2px solid #c7c9cc"),
            											"padding" : nexacro.PaddingObject("4px 12px 4px 12px"),
            											"color" : nexacro.ColorObject("#777777"),
            											"font" : nexacro.FontObject("normal 500 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"tabbuttonitemtext" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
            									}
            								},
            								"class" :
            								[
            									{
            										"tab_TF_screen" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"padding" : nexacro.PaddingObject("0px 24px 0px 0px")
            												}
            											}
            										}
            									},
            									{
            										"tab_POP_notice" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"padding" : nexacro.PaddingObject("0px")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"extrabutton" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 2px"),
            										"icon" : nexacro.UrlObject("URL('theme://images/tab_extra_N.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/tab_extra_O.png')")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/tab_extra_N.png')")
            									}
            								},
            								"class" :
            								[
            									{
            										"tab_TF_screen" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
            													"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_close_N.png')")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_close_O.png')")
            												},
            												"selected" :
            												{
            													"icon" : nexacro.UrlObject("url('imagerc::top/tab_TF_close_N.png')")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"DatePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("16px"),
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"font" : nexacro.FontObject("normal 400 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"")
            					}
            				}
            			},
            			"yearstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("normal 700 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            										"color" : nexacro.ColorObject("#333333"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#999999")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"monthstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("normal 700 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            										"color" : nexacro.ColorObject("#333333"),
            										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#999999")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"yearspin" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #f0f0f0")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #0ca950")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #0ca950")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"monthspin" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #f0f0f0")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #0ca950")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #0ca950")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"body" :
            			{
            				"parent" :
            				{
            					"DatePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"weekband" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"disabled" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"weekitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#777777")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#239cf0")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ee5555")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#777777")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dayitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"today" :
            									{
            										"color" : nexacro.ColorObject("#000000"),
            										"border" : nexacro.BorderObject("1px solid #000000")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#239cf0")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ee5555")
            									},
            									"mouseover_saturday" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"mouseover_sunday" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"trailingday" :
            									{
            										"color" : nexacro.ColorObject("#d1d1d1")
            									},
            									"mouseover_trailingday" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#999999")
            									},
            									"disabled_selected" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"monthitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#333333"),
            										"border" : nexacro.BorderObject("1px solid #ffffff")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"border" : nexacro.BorderObject("1px solid #ffffff")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#999999")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"yearitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#333333")
            									},
            									"focused" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"trailingyear" :
            									{
            										"color" : nexacro.ColorObject("#d1d1d1")
            									},
            									"mouseover_trailingyear" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#999999")
            									},
            									"disabled_selected" :
            									{
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"VScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"HScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"incbutton" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/vscroll_inc_N.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/vscroll_inc_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/vscroll_inc_P.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/vscroll_inc_D.png')")
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/hscroll_inc_N.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/hscroll_inc_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/hscroll_inc_P.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/hscroll_inc_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"decbutton" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/vscroll_dec_N.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/vscroll_dec_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/vscroll_dec_P.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/vscroll_dec_D.png')")
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/hscroll_dec_N.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/hscroll_dec_O.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/hscroll_dec_P.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/hscroll_dec_D.png')")
            							}
            						}
            					}
            				}
            			},
            			"trackbar" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/vscroll_tracker_N.png') 8px 8px")
            							},
            							"selected" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/vscroll_tracker_N.png') 8px 8px")
            							},
            							"pushed" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/vscroll_tracker_P.png') 8px 8px")
            							},
            							"mouseover" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/vscroll_tracker_O.png') 8px 8px")
            							},
            							"focused" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/vscroll_tracker_O.png') 8px 8px")
            							},
            							"disabled" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/vscroll_tracker_D.png') 8px 8px")
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/hscroll_tracker_N.png') 8px 8px")
            							},
            							"selected" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/hscroll_tracker_N.png') 8px 8px")
            							},
            							"pushed" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/hscroll_tracker_P.png') 8px 8px")
            							},
            							"mouseover" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/hscroll_tracker_O.png') 8px 8px")
            							},
            							"focused" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/hscroll_tracker_O.png') 8px 8px")
            							},
            							"disabled" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/hscroll_tracker_D.png') 8px 8px")
            							}
            						}
            					},
            					"VScrollIndicatorControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/vscroll_tracker_N.png') 8px 8px")
            							},
            							"selected" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/vscroll_tracker_N.png') 8px 8px")
            							},
            							"pushed" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/vscroll_tracker_P.png') 8px 8px")
            							},
            							"mouseover" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/vscroll_tracker_O.png') 8px 8px")
            							},
            							"focused" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/vscroll_tracker_O.png') 8px 8px")
            							},
            							"disabled" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/vscroll_tracker_D.png') 8px 8px")
            							}
            						}
            					},
            					"HScrollIndicatorControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/hscroll_tracker_N.png') 8px 8px")
            							},
            							"selected" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/hscroll_tracker_N.png') 8px 8px")
            							},
            							"pushed" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/hscroll_tracker_P.png') 8px 8px")
            							},
            							"mouseover" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/hscroll_tracker_O.png') 8px 8px")
            							},
            							"focused" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/hscroll_tracker_O.png') 8px 8px")
            							},
            							"disabled" :
            							{
            								"edge" : nexacro.EdgeImageObject("url('theme://images/hscroll_tracker_D.png') 8px 8px")
            							}
            						}
            					}
            				}
            			},
            			"progressbar" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d2d0d0")
            							}
            						}
            					}
            				}
            			},
            			"resizegrip" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_grip.png\")")
            							}
            						}
            					}
            				}
            			},
            			"TitleBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            						"color" : nexacro.ColorObject("#ffffff")
            					}
            				}
            			},
            			"titleicon" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            							},
            							"deactivate" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            							}
            						}
            					}
            				}
            			},
            			"minbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Min.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Min.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Min.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Min.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MinO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MinO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MinD.png\")")
            							}
            						}
            					},
            					"titlebar" :
            					{
            						"parent" :
            						{
            							"ChildFrame" :
            							{
            								"class" :
            								[
            									{
            										"modal" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/img_POP_min_N.png')")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/img_POP_min_N.png')")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/img_POP_min_N.png')")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/img_POP_min_N.png')")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"maxbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MaxO.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MaxO.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MaxO.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MaxO.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Max.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Max.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_MaxD.png\")")
            							}
            						}
            					},
            					"titlebar" :
            					{
            						"parent" :
            						{
            							"ChildFrame" :
            							{
            								"class" :
            								[
            									{
            										"modal" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/img_POP_max_N.png')")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/img_POP_max_N.png')")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/img_POP_max_N.png')")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/img_POP_max_N.png')")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"normalbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Normal.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Normal.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Normal.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Normal.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_NormalO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_NormalO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_NormalD.png\")")
            							}
            						}
            					},
            					"titlebar" :
            					{
            						"parent" :
            						{
            							"ChildFrame" :
            							{
            								"class" :
            								[
            									{
            										"modal" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/img_POP_normal_N.png')")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/img_POP_normal_N.png')")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/img_POP_normal_N.png')")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/img_POP_normal_N.png')")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"closebutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Close.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Close.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Close.png\")")
            							},
            							"deactivate" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_Close.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_CloseO.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_CloseO.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tib_WF_CloseD.png\")")
            							}
            						}
            					},
            					"titlebar" :
            					{
            						"parent" :
            						{
            							"ChildFrame" :
            							{
            								"class" :
            								[
            									{
            										"modal" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/img_POP_close_N.png')")
            												},
            												"mouseover" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/img_POP_close_N.png')")
            												},
            												"pushed" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/img_POP_close_N.png')")
            												},
            												"disabled" :
            												{
            													"icon" : nexacro.UrlObject("url('theme://images/img_POP_close_N.png')")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"StepControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 10px 0px")
            					}
            				}
            			},
            			"stepitem" :
            			{
            				"parent" :
            				{
            					"StepControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
            							}
            						}
            					}
            				}
            			},
            			"expandbar" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c2c2c2")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #a0a0a0")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #a0a0a0")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#bbbbbb"),
            										"border" : nexacro.BorderObject("1px solid #d9d9d9")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/cbo_dropN.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_expand.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"CheckBoxSet" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dedede"),
            						"padding" : nexacro.PaddingObject("0px 10px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dedede")
            					}
            				}
            			},
            			"CheckBoxSetControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dedede"),
            						"padding" : nexacro.PaddingObject("0px 10px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #dedede")
            					}
            				}
            			},
            			"checkboxsetitem" :
            			{
            				"parent" :
            				{
            					"CheckBoxSetControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#333333"),
            								"padding" : nexacro.PaddingObject("3px 0px 4px"),
            								"icon" : nexacro.UrlObject("url('theme://images/chk_N.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 10px 0px 6px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999"),
            								"icon" : nexacro.UrlObject("url('theme://images/chk_D.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/chk_N.png')")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#222222"),
            								"icon" : nexacro.UrlObject("url('theme://images/chk_S.png')")
            							}
            						}
            					}
            				}
            			},
            			"MultiCombo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed"),
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"MultiComboControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0ca950")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #ededed"),
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"multicombolist" :
            			{
            				"parent" :
            				{
            					"MultiCombo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("4px 0px")
            							}
            						}
            					},
            					"MultiComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("4px 0px")
            							}
            						}
            					}
            				}
            			},
            			"multicombotext" :
            			{
            				"parent" :
            				{
            					"MultiCombo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
            							}
            						}
            					},
            					"MultiComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
            							}
            						}
            					}
            				}
            			},
            			"multicombotagbox" :
            			{
            				"parent" :
            				{
            					"MultiCombo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("3px 3px 0px")
            							}
            						}
            					},
            					"MultiComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("3px 3px 0px")
            							}
            						}
            					}
            				}
            			},
            			"MultiComboTagBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"padding" : nexacro.PaddingObject("3px")
            					}
            				}
            			},
            			"tagboxedit" :
            			{
            				"parent" :
            				{
            					"MultiComboTagBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("3px")
            							}
            						}
            					}
            				}
            			},
            			"TagBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f0f0f0")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #c3e9cd")
            					}
            				}
            			},
            			"tagbutton" :
            			{
            				"parent" :
            				{
            					"TagBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tagitem_closeN.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/tagitem_closeO.png')")
            							}
            						}
            					}
            				}
            			},
            			"tagtext" :
            			{
            				"parent" :
            				{
            					"TagBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("1px 2px 2px 6px")
            							}
            						}
            					}
            				}
            			},
            			"MultiComboListControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"padding" : nexacro.PaddingObject("4px 0px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"checkboxset" :
            			{
            				"parent" :
            				{
            					"MultiComboListControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("normal 400 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            								"color" : nexacro.ColorObject("#555555"),
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"selectallcheckbox" :
            			{
            				"parent" :
            				{
            					"MultiComboListControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#555555"),
            								"padding" : nexacro.PaddingObject("2px 9px 3px 9px"),
            								"icon" : nexacro.UrlObject("url('theme://images/chk_N.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #ebeef5")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999"),
            								"icon" : nexacro.UrlObject("url('theme://images/chk_D.png')")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/chk_N.png')")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#555555"),
            								"icon" : nexacro.UrlObject("url('theme://images/chk_S.png')")
            							}
            						}
            					}
            				}
            			},
            			"Div" :
            			{
            				"class" :
            				[
            					{
            						"div_POP_lev0" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"div_POP_lev1" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"div_POP_lev2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"div_POP_lev3" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cccccc")
            								}
            							}
            						}
            					},
            					{
            						"div_POP_search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dedede")
            								}
            							}
            						}
            					},
            					{
            						"div_subMenuBottom_hide" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"edge" : nexacro.EdgeImageObject("url('imagerc::left/bg_menuDown_hide.png') 14px 24px")
            								}
            							}
            						}
            					},
            					{
            						"div_login" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"div_login_banner" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"div_TFDM_BasicProc" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"div_TFDM_BottomStep" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #e1e1e1")
            								}
            							}
            						}
            					},
            					{
            						"div_TFDM__Search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c8cdd7,0px solid #c8cdd7,1px solid #a9aeb7")
            								}
            							}
            						}
            					}
            				]
            			},
            			"PopupDiv" :
            			{
            				"class" :
            				[
            					{
            						"pdiv_POP_lev1" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"pdiv_POP_lev2" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"pdiv_POP_lev3" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cccccc")
            								}
            							}
            						}
            					},
            					{
            						"pdiv_POP_calMonth" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #cccccc")
            								}
            							}
            						}
            					}
            				]
            			},
            			"titlebar" :
            			{
            				"parent" :
            				{
            					"ChildFrame" :
            					{
            						"class" :
            						[
            							{
            								"modal" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"color" : nexacro.ColorObject("#222222"),
            											"font" : nexacro.FontObject("normal 500 18px/normal \"noto\",\"Malgun Gothic\",\"Arial\""),
            											"padding" : nexacro.PaddingObject("16px 24px 14px 24px")
            										},
            										"disabled" :
            										{
            											"color" : nexacro.ColorObject("#999999")
            										},
            										"deactivate" :
            										{
            											"color" : nexacro.ColorObject("#999999")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"datepicker" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"class" :
            						[
            							{
            								"cal_POP_period" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			}
		},
		{
            "includeStatusMap" : true,
            			"hasListViewExpandStatus" : true,
            			"applyMarkupValidation" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();

	};
}
)();
