\ProvidesClass{cv}[2020/06/09 kdsuneraavinash cv class]

% Font size, Paper size
\LoadClass[12pt,a4paper]{article}
% Remove paragraph indentation
\usepackage[parfill]{parskip} 
% Required for boldface (\bf and \bfseries) tabular columns
\usepackage{array}
% Required for `if then else` statements
\usepackage{ifthen}
% Suppress page numbers
\pagestyle{empty}
% Table align package
\usepackage{tabularx}
% Add margin
\usepackage{changepage}
% Show images
\usepackage{graphicx}
% Show hyperlinks
\usepackage[hidelinks]{hyperref}
% Background image
\usepackage[pages=some]{background}
% Coloring package
\usepackage{xcolor}
% Set default separator to a diamond
\def \sep {$\diamond$}
\def \ss#1{\textsuperscript{#1}}

% Green color
\definecolor{primary}{rgb}{0.29, 0.33, 0.13}
\definecolor{grey}{rgb}{0.5, 0.5, 0.5}

% Disabled color
\newcommand{\lightsubtitle}[1]{ \small {\textcolor{grey}{#1}\vspace{2pt}} }

%-----------------------------------
%	Name and Subtitle
%-----------------------------------

% Defines the face and background image commands
\def \imagename#1{\def\@imagename{#1}}
\def \sidebar#1{\def\@sidebar{#1}}
\def \header#1{\def\@header{#1}}
% Defines the \name command to set name
\def \name#1{\def\@name{#1}}
\def \@name {}
% Subtitle lines
\let \@subtitleone \relax
\let \@subtitletwo \relax
\let \@subtitlethree \relax
\def \subtitle #1{
    \@ifundefined{@subtitleone}{
        \def \@subtitleone {#1}
    }{
    \@ifundefined{@subtitletwo}{
        \def \@subtitletwo {#1}
    }{
     \def \@subtitlethree {#1}
    }}
}

% \printname is used to print the name as a page header
\def \printname {
    \begingroup
        {\MakeUppercase{\namesize\bf \@name}}
        \nameskip\break
    \endgroup
}
% \printsubtitle is used to style an subtitle line (given as input)
\def \printsubtitle #1{
    \begingroup
        \def \\ {\sep\ }
        {\subtitlesize #1} 
    \endgroup
    \par
    \subtitleskip
    \vspace{-2pt}
}

%-----------------------------------
%	Header
%-----------------------------------

% Background image
\backgroundsetup{
    scale=1,
    color=black,
    opacity=1,
    angle=0,
    contents={%
        \includegraphics[width=\paperwidth,height=\paperheight]\@sidebar
    }%
}

% Header text content
\def \headerText{
    \begin{flushleft}
    \printname
    \@ifundefined{@subtitleone}{}{
        \printsubtitle{\@subtitleone}}
    \@ifundefined{@subtitletwo}{}{ 
        \printsubtitle{\@subtitletwo}}
    \@ifundefined{@subtitlethree}{}{
        \printsubtitle{\@subtitlethree}}
    \end{flushleft}
}


% Heading
\let\ori@document=\document
\renewcommand{\document}{
    \ori@document
    \@ifundefined{@sidebar}{}{
        \BgThispage
    }
    \@ifundefined{@header}{}{ 
        \@ifundefined{@imagename}{ 
            \centering{\headerText}
        }{
            \noindent\begin{minipage}[]{0.17\textwidth}
                \begin{tikzpicture}
                    \begin{scope}
                        \clip [rounded corners=0.5\textwidth] (0,0) rectangle coordinate (centerpoint) (\textwidth,\textwidth);
                        \node [inner sep=0pt] at (centerpoint) {\includegraphics[width=\textwidth, height=\textwidth]{\@imagename}};
                    \end{scope}
                    \draw[white] (0.5\textwidth,0.5\textwidth) circle (0.5\textwidth);
                    \end{tikzpicture}
                % \includegraphics[width=\linewidth]\@imagename
            \end{minipage}%
            \hfill%
            \begin{minipage}[]{0.78\textwidth}
                \@ifundefined{@sidebar}{ \headerText }
                { \textcolor{white}{\headerText} }
            \end{minipage}
        }
    }
    \@ifundefined{@sidebar}{  }
    { \vspace{0.4in} }
    
}

%-----------------------------------
%	Sections
%-----------------------------------

\newcommand\sectioncolor[3]{
    \@ifundefined{@sidebar}{% 
        #1#2#3% 
    }% 
    {%  
        \textcolor{orange}{#1#2#3}% 
    }%  
}

% Defines the rSection environment for the large sections within the CV
\newenvironment{rSection}[1]{
    \sectionskip
    {\bf \sectioncolor #1 }
    \sectionlineskip
    \vspace{-14pt}
    \\
    \noindent\rule{\linewidth}{0.4pt}
    \vspace{-24pt}
    \small\begin{list}{}{ 
        \setlength{\leftmargin}{0em} 
    }
    \item[]
}{
    \end{list}
}

% Defines tabular section
\newenvironment{tSection}[2]{
    \begin{rSection}{#1}
        \vspace{3pt}
        \begin{tabular}{ @{} > {\bfseries}l @{\hspace{4ex}} l @{\hspace{2ex}} l }
            #2
        \end{tabular}
    \end{rSection}    
}

%-----------------------------------
%	White-spaces
%-----------------------------------

\def\namesize{\Large}           % Size of the name at the top of the document
\def\subtitleskip{\smallskip}   % The space between the two subtitle (or phone/email) lines
\def\sectionlineskip{\medskip}  % The space above the horizontal line for each section 
\def\nameskip{\bigskip}         % The space after your name at the top
\def\sectionskip{\medskip}      % The space after the heading section
\def\subtitlesize{\normalsize}
\urlstyle{same}                 % Use same font in hyperlinks
