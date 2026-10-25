const e=JSON.parse(`{
  "schemaVersion": 1,
  "generatedAt": "2026-10-23T14:20:32.159Z",
  "markets": {
    "macau": {
      "stance": "mixed",
      "confidence": "low",
      "headline": "Macau October GGR looks roughly flat year on year; the leading estimates are early and Golden Week run-rates tend to overstate.",
      "summary": "Macau GGR looks flat to slightly lower year on year for October, after a soft third quarter. The latest press estimate for 2026-10 is MOP 22,600m (-1.88% YoY, in progress). The run-rate is MOP 836m per day (+6.96% YoY), but October run-rates have overstated the month by a median 48% in early weeks. Targets show a slowdown: 2026-Q3 GGR was MOP 60,220m (-3.76% YoY), driven by mass baccarat. Confidence is low because the two leading indicators differ in sign and are still in progress.",
      "points": [
        {
          "kind": "leading-signal",
          "text": "The sell-side estimate for 2026-10 is MOP 22,600m, -1.88% YoY and in progress. This points to a flat to slightly lower October, similar to 2026-08 (-1.2%) and 2026-09 (-1.24%).",
          "seriesIds": [
            "macau.press.ggr_estimate_latest"
          ]
        },
        {
          "kind": "leading-signal",
          "text": "The month-to-date run-rate is MOP 836m per day (+6.96% YoY), flagged as an estimate and in progress. October run-rates have overstated the month by a median 48% in week 1, so treat this as upside noise, not a forecast.",
          "seriesIds": [
            "macau.press.ggr_runrate_latest"
          ]
        },
        {
          "kind": "target-trend",
          "text": "DICJ monthly GGR was MOP 18,060m in 2026-09 (-1.24% YoY). That follows -12.1% in 2026-06, -8.43% in 2026-07 and -1.2% in 2026-08. The decline has narrowed but not turned positive.",
          "seriesIds": [
            "macau.dicj.ggr"
          ]
        },
        {
          "kind": "target-trend",
          "text": "2026-Q3 GGR was MOP 60,220m (-3.76% YoY), after +14.2% in 2026-Q1. Mass baccarat was -7.9% YoY and total mass was -5.2%. VIP baccarat was +0.118% and slots were +18.8%.",
          "seriesIds": [
            "macau.dicj.ggr_q",
            "macau.dicj.mass_baccarat_q",
            "macau.dicj.mass_q",
            "macau.dicj.vip_baccarat_q",
            "macau.dicj.slots_q"
          ]
        },
        {
          "kind": "context",
          "text": "HK border volume is up: route departures were 435,900 in the 7 days to 2026-10-21 (+29.2% YoY). Golden Week arrivals were preliminary at 1,143,000 per day (+15.2% YoY). These are volume series that did not predict GGR, so they do not support a rise in October GGR.",
          "seriesIds": [
            "macau.immd.route_departures",
            "macau.dataplus.gw_daily_total"
          ]
        },
        {
          "kind": "data-gap",
          "text": "Visitor data runs only to 2026-08 and is published after GGR. The Golden Week series are marked overdue and preliminary.",
          "seriesIds": [
            "macau.dataplus.visitor_arrivals",
            "macau.dataplus.gw_daily_mainland"
          ]
        }
      ],
      "watch": [
        {
          "date": "2026-11-01",
          "text": "DICJ October 2026 GGR release; compare with the MOP 22,600m estimate (-1.88% YoY)."
        },
        {
          "date": "2026-12-01",
          "text": "DICJ November 2026 GGR release; checks whether the YoY decline stays near -1%."
        }
      ],
      "caveats": [
        "Press estimates are sell-side channel checks, not official numbers, and the October figure is still in progress.",
        "The leading estimate beat naive in tests (MAPE 4.2% vs 9.2%), but October run-rates are biased upward early in Golden Week.",
        "Border and visitor series are volume indicators and did not predict GGR."
      ],
      "unmatchedNumbers": [],
      "generatedAt": "2026-10-22T16:01:29.748Z",
      "model": "claude-sonnet-5-5",
      "monitorBuiltAt": "2026-10-22T15:22:44Z",
      "asOf": "2026-10-23",
      "digestSha": "0764fa210e40af57",
      "costUsd": 0.12961720000000002
    },
    "newyork": {
      "stance": "neutral",
      "confidence": "low",
      "headline": "RWNYC weekly GGR is flat near $29–30m; slot productivity per unit is soft after the capacity step-up, so expect a steady quarter.",
      "summary": "RWNYC looks flat for the coming quarter, with no clear direction. Total GGR was $29,410,000 in the week ending 2026-10-11, inside a $28.3m–$31.8m range since late August. Slot win per unit per day was $708.6 in that week, in a range of $662.9–$786.3 since late August. The leading indicator, Empire City net win, is slipping slightly (-3.71% in the week ending 2026-10-17), but it was tested on the VLT era and its link to the commercial casino is weaker. Confidence is low.",
      "points": [
        {
          "kind": "target-trend",
          "text": "Total GGR was $29,410,000 in the week ending 2026-10-11 (+1.64% on the prior week). Recent weeks ran $28,270,000 to $31,810,000, with no clear trend. No YoY is available because the casino opened 28 Apr 2026.",
          "seriesIds": [
            "newyork.nygc_rwnyc.total_ggr"
          ]
        },
        {
          "kind": "target-trend",
          "text": "Slot GGR was $19,790,000 (-3.86% week on week). Slot win per unit per day was $708.6, down from $786.3 in the week ending 2026-09-06. Average slots/ETGs rose from 3,917 (2026-08-23) to 3,990 (2026-10-11). Slot productivity is therefore soft, and the capacity added this year is not lifting slot revenue.",
          "seriesIds": [
            "newyork.nygc_rwnyc.slot_ggr",
            "newyork.nygc_rwnyc.win_per_unit_day",
            "newyork.nygc_rwnyc.avg_slots"
          ]
        },
        {
          "kind": "target-trend",
          "text": "Table GGR was $9,617,000 (+15.2%) and win per table per day was $5,677 with 242 tables. The weekly range is wide, from $4,695 to $7,197 since late August. Table drop was $51,480,000. The table swing is hold volatility, so it gives no direction.",
          "seriesIds": [
            "newyork.nygc_rwnyc.table_ggr",
            "newyork.nygc_rwnyc.win_per_table_day",
            "newyork.nygc_rwnyc.table_drop"
          ]
        },
        {
          "kind": "leading-signal",
          "text": "Empire City weekly net win was $11,160,000 for the week ending 2026-10-17 (-1.89% week on week, -3.71% on the prior-year figure). Win per VGM per day was $353. This points to mildly softer demand for the next RWNYC report. The test was on the legacy VLT regime and the link is weaker since the opening (+0.31 week-over-week, n=22), so treat it as weak support.",
          "seriesIds": [
            "newyork.nygc_empire.net_win",
            "newyork.nygc_empire.win_per_unit_day"
          ]
        },
        {
          "kind": "context",
          "text": "Monthly net revenue to operator was $66,530,000 in September 2026, down 7.47% from August. Gaming tax was $60,170,000, down 6.26%. Both are untested context, but they match a flat-to-softer slot trend. Active promotions were steady at 14 per week.",
          "seriesIds": [
            "newyork.nygc_rwnyc_monthly.net_revenue_operator",
            "newyork.nygc_rwnyc_monthly.gaming_tax",
            "newyork.rwnyc_events.promotions_active"
          ]
        },
        {
          "kind": "data-gap",
          "text": "There is no year-over-year comparison, because the commercial regime began 28 Apr 2026. The legacy VLT series ended 27 Apr 2026 and is a different regime. Local lottery, JFK and weather series are untested, and the MTA series showed no signal.",
          "seriesIds": [
            "newyork.nygc_rwnyc_vlt.net_win",
            "newyork.lottery.draw_sales_near",
            "newyork.mta.entries_196"
          ]
        }
      ],
      "watch": [
        {
          "date": "2026-10-27",
          "text": "NYGC RWNYC weekly report (release window 2026-10-27 to 2026-10-29): check slot win per unit per day against $708.6 and total GGR against $29,410,000."
        },
        {
          "date": "2026-10-28",
          "text": "Empire City weekly report for the week ending 2026-10-24 (window starts 2026-10-28): a further fall would support a softer RWNYC read."
        },
        {
          "date": "2026-11-03",
          "text": "NYGC RWNYC weekly report for the week ending 2026-10-25 (window starts 2026-11-03)."
        }
      ],
      "caveats": [
        "The Empire City test was on the VLT regime, and the link to the commercial casino is weaker (+0.31, n=22).",
        "Only about 24 weeks of commercial history exist, and table results are volatile from week to week.",
        "The 2,501 to 3,716 slot step in late July is not shown in the recent rows, so its full effect cannot be isolated here."
      ],
      "unmatchedNumbers": [
        "28.3",
        "31.8",
        "2,501",
        "3,716"
      ],
      "generatedAt": "2026-10-23T14:20:14.995Z",
      "model": "claude-sonnet-5-5",
      "monitorBuiltAt": "2026-10-23T14:17:04Z",
      "asOf": "2026-10-23",
      "digestSha": "b92a221b6cff52f9",
      "costUsd": 0.12553
    },
    "singapore": {
      "stance": "unclear",
      "confidence": "low",
      "headline": "Singapore direction is unclear: MBS profit fell sharply in 2026-Q3, but no leading indicator exists to call the next releases.",
      "summary": "The evidence does not support a firm direction for the next releases. MBS hold-normalized EBITDA was USD 594m in 2026-Q3, down 15.1% YoY, after USD 652m in 2026-Q2 (-5.23%). Reported EBITDA fell 20.6% YoY and net revenue fell 9.89%. No indicator in the digest is rated leading, so these trends are descriptive only. RWS Genting segment EBITDA rose to MYR 678m in 2026-Q2 from MYR 568.5m, but revenue is still down 4.54% YoY.",
      "points": [
        {
          "kind": "target-trend",
          "text": "MBS hold-normalized EBITDA was USD 594m in 2026-Q3, down 15.1% YoY and 8.9% on the prior quarter. This is the third straight quarterly slowdown from USD 794m in 2026-Q1. Reported EBITDA was USD 590m (-20.6% YoY).",
          "seriesIds": [
            "singapore.lvs.mbs_hold_normalized_ebitda",
            "singapore.lvs.mbs_adj_property_ebitda"
          ]
        },
        {
          "kind": "target-trend",
          "text": "MBS net revenue was USD 1,294m in 2026-Q3 (-9.89% YoY). Mass win % fell to 18.7% (-23.7% YoY) while mass drop rose 12.6% to USD 2,874m. Rolling chip volume was USD 8,429m (-7.06% YoY) with win at 4.53%. Demand in mass looks firm; the weakness is in hold and rolling chip.",
          "seriesIds": [
            "singapore.lvs.mbs_net_revenue",
            "singapore.lvs.mbs_mass_win_pct",
            "singapore.lvs.mbs_mass_table_drop",
            "singapore.lvs.mbs_rolling_chip_volume",
            "singapore.lvs.mbs_rolling_chip_win_pct"
          ]
        },
        {
          "kind": "target-trend",
          "text": "RWS adjusted EBITDA (Genting segment) was MYR 678m in 2026-Q2, up 19.3% on 2026-Q1. Revenue was MYR 1,861m (-4.54% YoY). In SGD, EBITDA was SGD 217m and revenue SGD 595.7m. YoY for EBITDA is not shown because of a structural break.",
          "seriesIds": [
            "singapore.genting.rws_adj_ebitda",
            "singapore.genting.rws_revenue",
            "singapore.genting.rws_adj_ebitda_sgd",
            "singapore.genting.rws_revenue_sgd"
          ]
        },
        {
          "kind": "context",
          "text": "Coincident tourism data is mixed. August 2026 arrivals were 1,605,000 (-0.267% YoY), visitor days were 5,550,000 (-4.42%), and hotel room revenue was SGD 527.6m (+3.96%). China arrivals rose 9.35%. These are early reads only and did not beat last-quarter growth in tests.",
          "seriesIds": [
            "singapore.singstat.arrivals_total",
            "singapore.singstat.visitor_days",
            "singapore.singstat.hotel_room_revenue",
            "singapore.singstat.arrivals_china"
          ]
        },
        {
          "kind": "context",
          "text": "Watches and jewellery retail (no-signal) was down 2.69% YoY in 2026-08. The test noted it called 2026-Q3 in the wrong direction. It is context only.",
          "seriesIds": [
            "singapore.singstat.retail_watches_jewellery"
          ]
        },
        {
          "kind": "data-gap",
          "text": "No indicator is rated leading for MBS or RWS. The MBS-to-RWS link is also no-signal. Next MBS results are about three months away.",
          "seriesIds": [
            "singapore.lvs.mbs_hold_normalized_ebitda",
            "singapore.genting.rws_revenue_sgd"
          ]
        }
      ],
      "watch": [
        {
          "date": "2026-11-27",
          "text": "RWS (Genting Berhad) next quarterly report, estimated date; shows 2026-Q3 segment results."
        },
        {
          "date": "2026-10-29",
          "text": "SingStat M650031 release (estimated): visitor and airport data for September."
        },
        {
          "date": "2027-01-26",
          "text": "MBS 2026-Q4 results from LVS: hold-normalized EBITDA against USD 594m in 2026-Q3."
        }
      ],
      "caveats": [
        "MBS figures are in USD, so SGD/USD moves change reported results. USD/SGD was 1.277 on 2026-10-21.",
        "RWS figures are Genting's RM translation and are not hold-normalized; RM/SGD moves alter them.",
        "Hold-normalization covers rolling chip only; mass hold swings (mass win 18.7%) are not adjusted."
      ],
      "unmatchedNumbers": [],
      "generatedAt": "2026-10-22T15:58:09.387Z",
      "model": "claude-sonnet-5-5",
      "monitorBuiltAt": "2026-10-22T15:22:44Z",
      "asOf": "2026-10-22",
      "digestSha": "8b1d46ceb370e229",
      "costUsd": 0.09954160000000001
    },
    "vegas": {
      "stance": "mixed",
      "confidence": "low",
      "headline": "Demand feeding RWLV looks softer on visitors and rooms, but Strip gaming win is flat; no leading indicator supports a firm direction.",
      "summary": "The read on demand for RWLV is mixed and low confidence. The market has no tested leading indicator, so this rests on the Strip-wide target trend. Strip total gaming win was 684.1 USD m in 2026-08, up 0.696% YoY, while visitor volume fell 4.31% and RevPAR fell 15.8%. Airport traffic is clearly weaker, but it is a volume series that did not predict gaming revenue. RWLV's own share is not published, so this says nothing about its reported results.",
      "points": [
        {
          "kind": "target-trend",
          "text": "Strip-wide gaming win was 684.1 USD m in 2026-08, up 0.696% YoY, after 776.3 in 2026-07 (+3.64%). Gaming has been roughly flat to slightly up in recent months. RWLV's share is not published.",
          "seriesIds": [
            "vegas.ngcb.strip_gaming_win",
            "vegas.lvcva.gaming_strip"
          ]
        },
        {
          "kind": "target-trend",
          "text": "Strip hotel demand weakened in 2026-08: occupancy 77% (-4.94% YoY), ADR 153.2 (-11.4%), RevPAR 117.9 (-15.8%), visitor volume 3,035,000 (-4.31%).",
          "seriesIds": [
            "vegas.lvcva.occupancy_strip",
            "vegas.lvcva.adr_strip",
            "vegas.lvcva.revpar_strip",
            "vegas.lvcva.visitor_volume"
          ]
        },
        {
          "kind": "target-trend",
          "text": "Strip baccarat win was 155 USD m in 2026-08 (+35.5% YoY), but hold was 18.37% and baccarat is volatile. Slot handle fell 3.44% YoY (yoyZ -2.3). Mixed table and slot picture.",
          "seriesIds": [
            "vegas.ngcb.baccarat_win",
            "vegas.ngcb.baccarat_hold_pct",
            "vegas.ngcb.slot_handle"
          ]
        },
        {
          "kind": "context",
          "text": "LAS throughput was 495,600 on a rolling 7-day basis to 2026-10-17 (-11.3% YoY). Total airport passengers were 4,149,000 in 2026-08 (-9.16%). This tracks visitor volume only and did not predict gaming revenue in tests, so it is not a forecast of gaming.",
          "seriesIds": [
            "vegas.tsa_foia.las_throughput",
            "vegas.hra.passengers_total"
          ]
        },
        {
          "kind": "context",
          "text": "Scheduled convention demand is listed, not attended. Early November has large shows such as SEMA Show 2026 (160,000 estimated) and the Las Vegas Grand Prix weekend from 2026-11-19. This is untested and not a revenue predictor. Macro series (I-94, gasoline, sentiment, jobs) showed no signal.",
          "seriesIds": [
            "vegas.lvcva_calendar.convention_attendance_scheduled",
            "vegas.lvcva_calendar.conventions_major_plus"
          ]
        },
        {
          "kind": "data-gap",
          "text": "No RWLV revenue is public. Only floor counts exist (1,260 slots, 130 tables, 35 baccarat tables at 2026-Q2), with no history. The Strip-wide figures cannot be split to RWLV.",
          "seriesIds": [
            "vegas.ngcb_count.rwlv_slots",
            "vegas.ngcb_count.rwlv_tables",
            "vegas.ngcb_count.rwlv_baccarat_tables"
          ]
        }
      ],
      "watch": [
        {
          "date": "2026-10-28",
          "text": "NGCB gaming revenue report for 2026-09: checks whether Strip gaming win stays flat despite weaker visitation."
        },
        {
          "date": "2026-10-30",
          "text": "LVCVA tourism indicators for 2026-09: occupancy, ADR, RevPAR and visitor volume."
        },
        {
          "date": "2026-11-30",
          "text": "NGCB and LVCVA reports for 2026-10, plus estimated Genting Berhad Q3 results including RWLV."
        }
      ],
      "caveats": [
        "All figures are Strip or county aggregates, not RWLV results; RWLV's share is not published.",
        "Airport and TSA series are volume indicators and did not predict gaming win, so the weak air traffic is not a gaming forecast.",
        "Baccarat win is volatile and driven by hold; convention figures are scheduled estimates, not attendance."
      ],
      "unmatchedNumbers": [],
      "generatedAt": "2026-10-23T14:20:32.159Z",
      "model": "claude-sonnet-5-5",
      "monitorBuiltAt": "2026-10-23T14:17:04Z",
      "asOf": "2026-10-23",
      "digestSha": "74d5e46c0abeadce",
      "costUsd": 0.1341453
    }
  }
}
`);export{e as default};
