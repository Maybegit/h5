window.onload = function () {

    // 第一页
    function p1show() {
        document.querySelector("#p1-img3").style.display = "block";
    }
    setTimeout(p1show, 200);
    function p1show2() {
        document.querySelector("#p1-img4").style.display = "block";
    }
    setTimeout(p1show2, 600);
    function p1show3() {
        document.querySelector("#p1-img5").style.display = "block";
    }
    setTimeout(p1show3, 1000);
    function p1show4() {
        $(".page02").addClass("show");
        $(".page02").removeClass("hide");
        $(".page01").removeClass("show");
        $(".page01").addClass("hide");

        // 第二页
        function p2show() {
            document.querySelector("#human").style.display = "block";
        }
        setTimeout(p2show, 200);
        function p2show2() {
            document.querySelector("#btn1").style.display = "block";
        }
        setTimeout(p2show2, 1000);
        function p2show3() {
            document.querySelector("#finger").style.display = "block";
        }
        setTimeout(p2show3, 1500);
        $(document).on('click', '#btn1', function () {
            $(".page03").addClass("show");
            $(".page03").removeClass("hide");
            $(".page02").removeClass("show");
            $(".page02").addClass("hide");

            // 第三页
            function p3show() {
                document.querySelector("#p3-img4").style.display = "block";
            }
            setTimeout(p3show, 1700);
            function p3show2() {
                document.querySelector("#p3-img7").style.display = "block";
            }
            setTimeout(p3show2, 2200);

            $("#p3-img7").click(function () {
                document.querySelector("#p3-img5").style.display = "block";
                setTimeout(p3showp4, 1000);
            })
            function p3showp4() {
                $(".page04").addClass("show");
                $(".page04").removeClass("hide");
                $(".page03").removeClass("show");
                $(".page03").addClass("hide");

                // 第四页
                function p4show() {
                    document.querySelector("#p4-human").style.display = "block";
                }
                setTimeout(p4show, 200);
                function p4show2() {
                    document.querySelector("#p4-btn1").style.display = "block";
                }
                setTimeout(p4show2, 1000);
                function p4show3() {
                    document.querySelector("#p4-finger").style.display = "block";
                }
                setTimeout(p4show3, 1500);
                $(document).on('click', '#p4-btn1', function () {
                    $(".page05").addClass("show");
                    $(".page05").removeClass("hide");
                    $(".page04").removeClass("show");
                    $(".page04").addClass("hide");

                    // 第五页
                    function p5show() {
                        document.querySelector("#p5-img3").style.display = "block";
                    }
                    setTimeout(p5show, 1700);
                    function p5show2() {
                        document.querySelector("#p5-img7").style.display = "block";
                    }
                    setTimeout(p5show2, 2200);
                    $("#p5-img7").click(function () {
                        document.querySelector("#p5-img5").style.display = "block";
                        setTimeout(p5showp6, 1000);
                    })
                    function p5showp6() {
                        $(".page06").addClass("show");
                        $(".page06").removeClass("hide");
                        $(".page05").removeClass("show");
                        $(".page05").addClass("hide");
                        // 第六页
                        function p6show() {
                            document.querySelector("#p6-human").style.display = "block";
                        }
                        setTimeout(p6show, 200);
                        function p6show2() {
                            document.querySelector("#p6-btn1").style.display = "block";
                        }
                        setTimeout(p6show2, 1000);
                        function p6show3() {
                            document.querySelector("#p6-finger").style.display = "block";
                        }
                        setTimeout(p6show3, 1500);
                        $(document).on('click', '#p6-btn1', function () {
                            $(".page07").addClass("show");
                            $(".page07").removeClass("hide");
                            $(".page06").removeClass("show");
                            $(".page06").addClass("hide");
                            // 第七页
                            function p7show() {
                                document.querySelector("#p7-img4").style.display = "block";
                            }
                            setTimeout(p7show, 1700);
                            function p7show2() {
                                document.querySelector("#p7-img7").style.display = "block";
                            }
                            setTimeout(p7show2, 2200);
                            $("#p7-img7").click(function () {
                                document.querySelector("#p7-img6").style.display = "block";
                                setTimeout(p7showp8, 1000);
                            })
                            function p7showp8() {
                                $(".page08").addClass("show");
                                $(".page08").removeClass("hide");
                                $(".page07").removeClass("show");
                                $(".page07").addClass("hide");
                                // 第八页
                                function p8show() {
                                    document.querySelector("#p8-img1").style.display = "block";
                                }
                                setTimeout(p8show, 300);
                                function p8show1() {
                                    document.querySelector("#p8-img4").style.display = "block";
                                }
                                setTimeout(p8show1, 800);
                                function p8show2() {
                                    document.querySelector("#p8-img2").style.display = "block";
                                }
                                setTimeout(p8show2, 1300);
                                function p8show3() {
                                    document.querySelector("#p8-img5").style.display = "block";
                                }
                                setTimeout(p8show3, 1800);
                                function p8show4() {
                                    document.querySelector("#p8-img3").style.display = "block";
                                }
                                setTimeout(p8show4, 2300);
                                function p8show5() {
                                    document.querySelector("#p8-img6").style.display = "block";
                                }
                                setTimeout(p8show5, 2800);
                                function p8show6() {
                                    document.querySelector("#p8-img7").style.display = "block";
                                }
                                setTimeout(p8show6, 3300);
                                $(document).on('click', '#p8-img7', function () {
                                    $(".page09").addClass("show");
                                    $(".page09").removeClass("hide");
                                    $(".page08").removeClass("show");
                                    $(".page08").addClass("hide");
                                    // 第九页
                                    function p9show() {
                                        document.querySelector("#p9-img3").style.display = "block";
                                    }
                                    setTimeout(p9show, 300);
                                    function p9show1() {
                                        document.querySelector("#p9-img4").style.display = "block";
                                    }
                                    setTimeout(p9show1, 1400);
                                    function p9show2() {
                                        document.querySelector("#p9-img5").style.display = "block";
                                    }
                                    setTimeout(p9show2, 1800);
                                    $(document).on('click', '#p9-img5', function () {
                                        $(".page10").addClass("show");
                                        $(".page10").removeClass("hide");
                                        $(".page09").removeClass("show");
                                        $(".page09").addClass("hide");
                                        // 第十页
                                        $(document).on('click', '.p10-img6', function () {
                                            window.location.reload();
                                        })
                                        $(document).on('click', '.p10-img7', function () {
                                            document.querySelector("#p10-img8").style.display = "block";
                                            document.querySelector("#p10-bg2").style.display = "block";
                                        });
                                        $(document).on('click', '#p10-bg2', function () {
                                            document.querySelector("#p10-img8").style.display = "none";
                                            document.querySelector("#p10-bg2").style.display = "none";
                                        });
                                    })
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    setTimeout(p1show4, 3000);

}





