if(!nexacro.FileUtil) {
	nexacro && (! function(e) {
		if (e.atob) try {
			e.atob(" ")
		} catch (n) {
			e.atob = (t = e.atob, (r = function(e) {
				return t(String(e).replace(/[\t\n\f\r ]+/g, ""))
			}).original = t, r)
		} else {
			var t, r, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
				a = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
			e.btoa = function(e) {
				for (var t, r, a, o, i = "", c = 0, l = (e = String(e)).length % 3; c < e.length;) {
					if ((r = e.charCodeAt(c++)) > 255 || (a = e.charCodeAt(c++)) > 255 || (o = e.charCodeAt(c++)) > 255) throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
					i += n.charAt((t = r << 16 | a << 8 | o) >> 18 & 63) + n.charAt(t >> 12 & 63) + n.charAt(t >> 6 & 63) + n.charAt(63 & t)
				}
				return l ? i.slice(0, l - 3) + "===".substring(l) : i
			}, e.atob = function(e) {
				if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !a.test(e)) throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
				e += "==".slice(2 - (3 & e.length));
				for (var t, r, o, i = "", c = 0; c < e.length;) t = n.indexOf(e.charAt(c++)) << 18 | n.indexOf(e.charAt(c++)) << 12 | (r = n.indexOf(e.charAt(c++))) << 6 | (o = n.indexOf(e.charAt(c++))), i += 64 === r ? String.fromCharCode(t >> 16 & 255) : 64 === o ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
				return i
			}
		}
	}(nexacro), nexacro.FileUtil = function() {
		var e, t, r = ":",
			n = " ",
			a = "application/octet-stream",
			o = "Runtime" == (nexacro.Browser || nexacro._Browser),
			i = {
				gif: "image/gif",
				json: "application/json",
				jpg: "image/jpeg",
				png: "image/png",
				txt: "text/plain",
				xml: "application/xml",
				xls: a,
				xlsx: a
			},
			c = {
				txt: 1,
				xml: 1,
				json: 1
			},
			l = nexacro._throwError = function() {
				throw ["UtilException", r, n, Array.prototype.join.call(arguments, n)].join("")
			},
			f = {};
		return FileUtil = {
			getMineType: function(e) {
				return i[e]
			},
			setMineType: function(e, t) {
				i[e] = t
			},
			createBlob: function(e, t) {
				return new Blob([e], {
					type: t
				})
			},
			read: function(e, t) {
				var r, n = e.name.split(".");
				n[n.length - 1];
				f.readfile = t, (r = new FileReader).onload = function(e) {
					var t, r, n, a;
					if (f && f.readfile && e.target && e.target.result) {
						for (n = "", r = (a = new Uint8Array(e.target.result)).byteLength, t = 0; t < r; t++) n += String.fromCharCode(a[t]);
						f.readfile(n), delete f.readfile
					}
				}, r.readAsArrayBuffer(e)
			},
			selectfile: function(e) {
				o ? l("Unimplemented") : (document.body.appendChild(t), f.selectfile = e, t.click())
			},
			save: function(e, t, r, p, scope, fn) {
				var n, a = nexacro.VirtualFile,
					l = i[t],
					f = c[t];
				r = r ? r + "." + t : "undefined." + t, o ? (f ? (e = "\ufeff" + e, n = a.openWrite | a.openText) : (nexacro._checkBase64String(e) || (e = nexacro.btoa(e)), n = a.openWrite | a.openBinary), FileUtil.fileDownload(e, r, n, p, scope, fn)) 
														  : (f ? e = "\ufeff" + e : (nexacro._checkBase64String(e) && (e = nexacro.atob(e)), e = function(e) {
					var t, r, n, a = e.length;
					if ("undefined" != typeof ArrayBuffer)
						for (r = new ArrayBuffer(a), t = new Uint8Array(r), n = 0; n < a; ++n) t[n] = 255 & e.charCodeAt(n);
					else
						for (r = new Array(a), n = 0; n < a; ++n) r[n] = 255 & e.charCodeAt(n);
					return r
				}(e)), FileUtil.fileDownload.call(window.navigator, FileUtil.createBlob(e, l), r))
			},
			fileDownload: o ? function(e, t, r, p, scope, fn) {
				if(!p || p == "") {
					var n = FileUtil._fd;
					n._command = "write", n._fdata = e, n._fn = fn, n._scope = scope;
					n.open("FileSave",FileDialog.SAVE, "%MYDOCUMENT%/", t);	// "%MYDOCUMENT%/" => 이전 열었던 폴더를위해 "%MYDOCUMENT%
				} else {
					var n = FileUtil._vf;
					n._command = "write", n._fdata = e, n._fn = fn, n._scope = scope;
					var fp;
					if(p) n.open(p + t, r);
					else n.open("%MYDOCUMENT%/" + t, VirtualFile.openWrite | VirtualFile.openBinary);
				}
			} : void 0 === navigator.msSaveOrOpenBlob ? function(t, r, scope) {
				var n = window.URL.createObjectURL(t);
				e.href = n, 
				e.download = r;
				if(nexacro._Browser == "Gecko") {
					document.body.appendChild(e);
					e.click();
					window.setTimeout(function() {
					  URL.revokeObjectURL(n);
					  document.body.removeChild(e);
					}, 0);
				} else if(nexacro._Browser == "Safari") {
					document.body.appendChild(e);
					e.setAttribute('download', r);
					if (document.createEvent) {
						var ee = document.createEvent("MouseEvents");
						ee.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
						e.dispatchEvent(ee);
					} else if (e.fireEvent) {
						e.fireEvent("onclick");
					}
					window.setTimeout(function() {
					  URL.revokeObjectURL(n);
					  document.body.removeChild(e);
					}, 0);
				} else {
					e.click();
					window.URL.revokeObjectURL(n);
				}
			} : navigator.msSaveOrOpenBlob
		}, o ? (
			FileUtil._fd = new nexacro.FileDialog("FileDialogExport"),
			FileUtil._fd.addEventHandler("onclose", 
				function(e, t) {
					switch (t.reason) {
						case 2:
							var __vf = t.virtualfiles[0];
							var n = FileUtil._vf;
							n.filename = __vf.filename;
							n.fullpath = __vf.fullpath;							
							n._command = e._command, n._fdata = e._fdata, n._fn = e._fn, n._scope = e._scope;
							e._command = e._fdata = e._fn = e._scope = null;
							n.open(n.fullpath, VirtualFile.openWrite | VirtualFile.openCreate | VirtualFile.openBinary);
							break;
						default :
							if(e._fn) {
								e._fn.call(e._scope,-1,"error");
								e._fn = e._scope = null;
							}
					}
				}
			),
			FileUtil._vf = new nexacro.VirtualFile("VirtualFileExport", ""),
			FileUtil._vf.addEventHandler("onsuccess", function(e, t) {
				switch (t.reason) {
					case 1:
						if("read" == e._command) { 
							e.read(); 
						} else if("write" == e._command) {
							e.write(e._fdata, "utf-8");
							e._fdata = "";
						}
						break;
					case 2:
					case 3:
					case 4:
					case 5:
						break;
					case 6:
						e.close();
						if(e._fn) {
							e._fn.call(e._scope,0,"success");
							e._fn = e._scope = null;
						}
						break;
					case 7:
					case 8:
					case 9:
					case 10:
					default:
						e.close()
				}
		}), FileUtil._vf.addEventHandler("onerror", function(e, t) {
			e._fdata = "";
			e.close();
			if(e._fn) {
				e._fn.call(e._scope,-1,t.errormsg);
				e._fn = e._scope = null;
			}
		})) : ( e = document.createElement("a"), (t = document.createElement("input")).type = "file", t.style.position = "absolute", t.style.top = "-500px", t.addEventListener("change", function(e) {
			f.selectfile && e.target && e.target.files && (f.selectfile(e.target.files[0]), delete f.selectfile)
		}, !1)), FileUtil
	}());
}
